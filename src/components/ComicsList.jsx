import Card from "./Card/Card"
import { useState } from "react"

export default function ComicsList({ comics }) {

  const [searchQuery, setSearchQuery] = useState('')

  const [selectedGenre, setSelectedGenre] = useState('')

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value)
  }


  const filteredComics = comics.filter(comic => {
    return comic.title.toLowerCase().includes(searchQuery.toLowerCase())
  })
    .filter(comic => {
      if (selectedGenre === '') {
        return true
      }
      return comic.type === selectedGenre
    }
    )

  return (
    <div className="container">

      <div className="label">
        <h2>CURRENT SERIES</h2>
        <input type="text" placeholder="search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <select name="select" id="" onChange={handleGenreChange}>
          <option value="">All</option>
          <option value="comic book">comic book</option>
          <option value="graphic novel">graphic Novel</option>
        </select>
      </div>

      <div className="row">

        {
          filteredComics.map(comic => (
            <Card key={comic.id} image={comic.thumb} title={comic.title} />
          ))
        }

      </div>

      <div className="loadMore">
        <button>
          Load More
        </button>
      </div>

    </div>
  )
}