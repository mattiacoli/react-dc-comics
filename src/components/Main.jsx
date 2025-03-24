import ComicsList from "./ComicsList"

export default function Main({ comics }) {

  return (
    <main className="main_site">

      <ComicsList comics={comics} />

    </main>
  )
}