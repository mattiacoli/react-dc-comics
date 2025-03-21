export default function Card({ image, title }) {
  return (
    <div className="col-2">
      <div className="card">

        <figure>
          <img src={image} alt={title} />
        </figure>

        <div className="title">
          {title}
        </div>
      </div>
    </div>
  )
}