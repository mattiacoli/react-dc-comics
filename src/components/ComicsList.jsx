import Card from "./Card/Card"
import { useState } from "react"

export default function ComicsList({ comics }) {

  const [searchQuery, setSearchQuery] = useState('')

  const filteredComics = comics.filter(comic => {
    return comic.title.toLowerCase().includes(searchQuery.toLowerCase())
  }
  )


  return (
    <div className="container">

      <div className="label">
        <h2>CURRENT SERIES</h2>
        <input type="text" placeholder="search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />



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