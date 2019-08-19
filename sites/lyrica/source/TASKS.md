
## Data

- Format: newline‑delimited JSON dump of 2,000 Genius songs.
> NDJSON is a convenient format for storing or streaming structured data that may be processed one record at a time. It works well with unix-style text processing tools and shell pipelines.
It's a great format for log files. It's also a flexible format for passing messages between cooperating processes.
> Line Separator is '\n'
This means '\r\n' is also supported because trailing white space is ignored when parsing JSON values.
> Each Line is a Valid JSON Value
The most common values will be objects or arrays, but any JSON value is permitted. See json.org for more information about JSON values.

- each line corresponds to a single Genius song in JSON form
   - fields:
    - id | **Number**
    - lyrics_text **String**
      - metadata headers **String** or **String Array w. (single item)** [Not required]
    - primary_artist **String**
    - title **String**
    - url **String**


## Analysis

## Part 1 | Who is the most lyrically prolific artist?


 ### Part 1, Question 1 | **Primary artists** with the most “lyric sections”

 > If we attribute each lyric section within a song’s lyrics to the primary artist of that song—the primary_artist field within
that song—which primary artists in this data set have the most total lyric sections attributed to them and how many do
they have?

 Q1.1: Which **primary artists** in this data set have the most total lyric sections attributed to them
 Q1.2: How many [lyric sections attributed to them] do they have?


### Tasks

1. Display the top 5 artists
2. Display the total number of lyric sections (across all songs in the data set) associated with [each top 5 artist].


### Background Info

- The lyrics are broken up into separate lyric sections; a lyrics section is a block of lyrics separated from the next block by **two or more newline characters**.
- A rough way to measure how lyrically prolific each artist is by measuring **how many total lyric sections there are in each song where they are the primary artist**.


---


 ### Part 1, Question 2 |  **Artists** who have performed the most lyrics sections

 > We can do a better job deciding who the most lyrically prolific artist is by attributing each lyric section to the performer of that
section described in the section header.

- If there is no section header at all or the section header does not list a performer, e.g. simply [Chorus] , we’ll attribute
that section to the primary artist on the song.

- If multiple performers are listed, e.g. [Chorus: YB, Big Sean & Fuzzy Jones] , we’ll give each artist full and equal credit
for that lyrics section (as if there were 3 duplicate identical sections, one for each artist)

 Q2.1: Which **artists** in this data set have the most total lyric sections attributed to them
 Q2.2: How many [lyric sections attributed to them] do they have?


### Tasks

1. Display the top 5 artists
2. Display the total number of lyric sections (across all songs in the data set) associated with [each top 5 artist].


### Background Info

- Since **this data is unstructured**, there are **multiple patterns that our community uses to format lyric section headers for
performers**. Look through the data to **identify the most prominent format patterns, but don’t stress tracking down
every possible edge case within the data set**.
  - E.g. folks are supposed to write Chorus in section headers but sometimes people write Hook instead. Usually
performers are listed after metadata about the section, e.g. [Chorus: Drake] , but other times the performer or metadata
is simply listed alone, e.g. [Drake] or [Chorus] respectively.
  - Sometimes multiple artists are split up as they were in the example above, via commas and ampersands. But other times
artists may be delimited in other ways, e.g. Drake + 2 Chainz .


---


### Part 1, Question 3 | **Artists** who have performed the most unique words

> In the previous section we attributed individual lyrics sections to the performers of those sections. But maybe we can do even
better than that: if we really want to know who the most lyrically prolific artist is we should figure out which artists have used
the most unique words in their performances.

Q3.1: Which **artists** performed the most unique words across all songs in this data set

### Tasks

1. Display the top 5 artists
2. Display the total number of lyric sections (across all songs in the data set) associated with [each top 5 artist].


### Background Info

- As with the previous section, **if multiple artists are credited on a single lyric section, you should treat it as if they each
performed every word in that section**.
- For the purpose of calculating unique words, **capitalization and punctuation should not matter**. So e.g. **Horse should, for
the purpose of calculating uniqueness, be the same as horse and horse,** .
- If an artist **uses the word horse in song 1 and again uses it later in song 17, that should count as 1 unique word, not two**.
- **Insofar as there are non‑English language characters in this dataset, you may remove or ignore those characters.**
- You should look at the data set and **think about other ways you might normalize words to get a good uniqueness count**,
but as with the previous section do your best but don’t worry about tracking down every last edge case.


---


## Part 2 | Scaling up and deploying these aggregates

- The data set we provided you has 2,000 songs, but Genius’s database includes nearly 5 million songs. If you were responsible
for building these features at scale, such that there was a dashboard somewhere that folks could visit at any time and see the
top 5 artists by each of the above metrics, **what are some issues you might run into and how might you address them**?

- Please write up a short response about what issues you might run into while deploying this at scale and how you might
address them. **Most submissions are 1‑2 pages but feel free to write more or less**.

- **In your description you may assume anything you want about our existing architecture, and feel free to discuss addressing
scaling issues using any 3rd party service or infrastructure you would need**.
