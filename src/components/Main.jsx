import ComicsList from "./ComicsList"
import comics from "../data/comics"

export default function Main() {
  return (
    <main className="main_site">

      <ComicsList comics={comics} />

    </main>
  )
}