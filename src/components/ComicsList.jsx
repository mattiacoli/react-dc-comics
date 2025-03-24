import Card from "./Card/Card"

export default function ComicsList({ comics }) {
  return (
    <div className="container">

      <div className="label">
        <h2>CURRENT SERIES</h2>
      </div>

      <div className="row">
        {
          comics.map(comic => (
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