import Header from "./components/Header"
import Jumbotron from "./components/Jumbotron"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Banner from "./components/Banner"

import comics from "./data/comics"
import linksList from "./data/navLinks"


function App() {

  return (
    <>
      <Header linksList={linksList} />
      <Jumbotron />
      <Main comics={comics} />
      <Banner />
      <Footer />

    </>
  )

}

export default App
