export default function Card({ image, title }) {
  return (
    <div className="col-2">
      <div className="card">
        <img src={image} alt={title} />
        <div>
          {title}
        </div>
      </div>
    </div>
  )
}