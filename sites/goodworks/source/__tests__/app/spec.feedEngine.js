import feedEngine from '@classes/feedEngine'


describe('The feedEngine Class', () => {

  const feeder = new feedEngine()

  describe('The collectAthletes property', () => {

    it('it should execute a successfull GET XHR request to the data source', async() => {
      const actual = await feeder.collectBallot()
      expect(actual).toStrictEqual(expect.any(Object))
      console.warn(`
        it should execute a successfull GET XHR request to the data source ::
        ${JSON.stringify(actual).substring(0,100)}
      `)
    })

  })

  describe('The collectAthletes Property', () => {

    it('it should convert the JSON data Object into a map', async() => {
      let ballot = await feeder.collectBallot()
      let actual = feeder.collectAthletes(ballot.athletes)
      expect(actual).toStrictEqual(expect.any(Map))
      expect(actual.size).not.toBe(0)
      console.warn(`
        it should convert the JSON data Object into a map ::
        ${ JSON.stringify(actual).substring(0,100)}
      `)
    })

    it('it should create a data Map with a non-zero length', async() => {
      let ballot = await feeder.collectBallot()
      let actual = feeder.collectAthletes(ballot.athletes)
      expect(actual.size).not.toBe(0)
      console.warn(`
        it should create a data Map with a non-zero length ::
        ${actual.size}
      `)
    })

    it('it should create a data Map with the correct value types', async() => {
      let ballot        = await feeder.collectBallot()
      let athletes      = feeder.collectAthletes(ballot.athletes)
      let athletesItr   = athletes.entries()
      let athleteEntry  = athletesItr.next()
      expect(athletes.has('akinmoladun-freedom')).toEqual(true)
      expect(athleteEntry.value[0]).toStrictEqual(expect.any(String))
      console.warn(`
        it should create a data Map with the correct value types ::
        ${typeof athletes.entries}
        ${JSON.stringify(athleteEntry).substring(0,100)}
      `)
    })

  })

})
