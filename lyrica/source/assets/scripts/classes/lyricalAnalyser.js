

export default class Analyser {

  constructor() {
    this.state = {
      categories: {
        prolific: {
          primaryArtists: {},
          actualArtists: {},
          uniqueWords: {
            words: {},
            count: {}
          }
        }
      },
      results: {
        prolific: {
          primaryArtists: {},
          actualArtists: {},
          uniqueWords: {}
        }
      },
      metadata: [],
      signals: {
        primaryArtists: new Event('signal--analysis--primaryArtist-complete'),
        actualArtists: new Event('signal--analysis--actualArtist-complete'),
        uniqueWords: new Event('signal--analysis--uniqueWords-complete')
      }
    }
  }


  signal(type) {

    switch (type) {

      case 'primaryArtist':
        window.dispatchEvent(this.state.signals.primaryArtists)
        break;

      case 'anyArtist':
        window.dispatchEvent(this.state.signals.actualArtists)
        break;

      case 'uniqueWords':
        window.dispatchEvent(this.state.signals.uniqueWords)
        break;

      default:
      throw 'Analyser.signal ERR: Incorrect parameter(s)'

    }

  }


  rankArtists(resObj) {
    let sortable = []
    Object.keys(resObj).map(artist => sortable.push([artist, resObj[`${artist}`]] ))
    return sortable.sort((a,b) => b[1] - a[1]).slice(0,5)
  }


  normalizeArtists(entry) {
    return entry
    .replace(/"/g,'')         /* strip quotations in atist name */
    .replace(/^\s|\s$/g,'')   /* strip whitespace at beginning or end atist name */
    .replace(/,/g,'_')        /* replace commas within atist name */
  }


  lyricalAnalysisA(songData) {

    /* Scan song metadata for lyrical sections */
    songData.map(song => {
      const metadataHeaders = song.lyrics_text.match(/\[.*\]/g)
      metadataHeaders && this.analyzeSongMetadata(
        'weighPrimaryArtists',
        song,
        metadataHeaders,
        this.state.categories.prolific.primaryArtists
      )
    })

    /* Rank primary artists based on analysis */
    this.state.results.prolific.primaryArtists = this.rankArtists(
      Lyrica.Analyser.state.categories.prolific.primaryArtists
    )

    /* signal process completion */
    this.signal('primaryArtist')

  }


  lyricalAnalysisB(songData) {

    /* Scan song metadata for lyrical sections */
    songData.map(song => {
      const metadataHeaders = song.lyrics_text.match(/\[.*\]/g)
      metadataHeaders && this.analyzeSongMetadata(
        'weighAllArtists',
        song,
        metadataHeaders,
        this.state.categories.prolific.actualArtists
      )
      metadataHeaders || this.analyzeSongMetadata(
        'weighPrimaryArtists',
        song,
        ['default-credit'],
        this.state.categories.prolific.actualArtists
      )
    })

    /* Rank artists based on analysis */
    this.state.results.prolific.actualArtists = this.rankArtists(
      Lyrica.Analyser.state.categories.prolific.actualArtists
    )

    /* signal process completion */
    this.signal('anyArtist')
  }


  lyricalAnalysisC(songData) {

    /* Scan song metadata for lyrical sections */
    songData.map(song => {

      /* Collect lyrical sections */
      const songSections = song.lyrics_text.split(/(?=\[)/g)

      /* Process lyrical sections */
      songSections.map(songSection => {
        this.analyzeSongMetadata(
          'weighUniqueness',
          song,
          songSection,
          this.state.categories.prolific.uniqueWords
        )
      })

    })

    /* Rank artists based on analysis */
    this.state.results.prolific.uniqueWords = this.rankArtists(
      Lyrica.Analyser.state.categories.prolific.uniqueWords.count
    )

    /* signal process completion */
    this.signal('uniqueWords')
  }


  analyzeSongMetadata(mode, song, songMetadata, collection) {

    switch (mode) {

      case 'weighPrimaryArtists':
        if(songMetadata) this.weighToPrimaryArtists(song, songMetadata, collection)
        break;

      case 'weighAllArtists':
        if(songMetadata) this.weighToAllArtists(song, songMetadata, collection)
        break;

      case 'weighUniqueness':
        if(songMetadata) this.weighUniqueWords(song, songMetadata, collection)
        break;

      default:
      throw 'Analyser.analyzeSongMetadata ERR: Incorrect parameter(s)'

    }

  }


  weighToPrimaryArtists(song, songMetadata, collection) {

    /* Simply tally lyrical sections on each song by artist */
    this.tallyLyricalSections(song.primary_artist, songMetadata.length, collection)

  }


  weighToAllArtists(song, metadata, collection) {

    metadata.map(header => {

      /* Extract artist names from headers */
      let songArtists = header.match(/\[.*\:(.*)\]/)

      /* Give primary artist credit by default if missing header info */
      songArtists || this.tallyLyricalSections(
        this.normalizeArtists(song.primary_artist),
        1,
        collection
      )

      /* Break up entries with multiple artists or process normally */
      songArtists && songArtists[1].split(/\&|\+|,|\sx\s/).map(artist => {
        artist = this.normalizeArtists(artist)
        this.tallyLyricalSections(artist, 1, collection)
      })

    })

  }


  weighUniqueWords(song, songSection, collection) {

    /* Setup */
    let songSectionLines      = []
    let songSectionWords      = []
    let songSectionWordsNorm  = []
    let songSectionUniqWords  = []
    let songSectionArtist     = songSection.match(/\[.*\:(.*)\]/)


    /* Processing */
    songSectionLines = songSection.split(/\n/)
    songSectionLines = songSectionLines.filter(line => !line.includes('[') && !line.length ==0)
    songSectionLines.map(line => songSectionWords.push(...line.split(/\s/g)))
    songSectionWordsNorm = songSectionWords.map(word => word.toLowerCase().replace(/!|\(|\)|\.|,|\?/g, ''))
    songSectionUniqWords = [...new Set(songSectionWordsNorm)]


    /* Resolution */
    if (songSectionArtist) {

      songSectionArtist[1].split(/\&|\+|,|\sx\s/).map(artist => {
        artist = this.normalizeArtists(artist)
        this.tallyUniqueWords(artist, songSectionUniqWords, collection)
      })

    }
    else {

      /* Credit primary artist with words in this lyrical section */
      let artist = this.normalizeArtists(song.primary_artist)
      this.tallyUniqueWords(artist, songSectionUniqWords, collection)

    }

  }


  tallyLyricalSections(artist, count, collection) {

    /* first record for artist: setup field */
    if (!collection[`${artist}`]) collection[`${artist}`] = 0

    /* artist record exitst: update field */
    collection[`${artist}`] += count

  }


  tallyUniqueWords(artist, words, collection) {

    /* first record for artist: setup field */
    if (!collection.words[`${artist}`]) collection.words[`${artist}`] = []
    if (!collection.count[`${artist}`]) collection.count[`${artist}`] = 0

    /* artist record exitst: update field */
    words.map(uniqueWord => {

      /* new unique word found: update fields */
      if (!collection.words[`${artist}`].includes(uniqueWord)) {
        collection.words[`${artist}`].push(uniqueWord)
        collection.count[`${artist}`] += 1
      }

    })

  }

}
