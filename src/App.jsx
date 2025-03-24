import Header from "./components/Header"
import Jumbotron from "./components/Jumbotron"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Banner from "./components/Banner"

import comics from "./data/comics"
import linksList from "./data/navLinks"
import footerLinks from "./data/footerLinks"


function App() {

  return (
    <>
      <Header linksList={linksList} />
      <Jumbotron />
      <Main comics={comics} />
      <Banner />
      <Footer comicsLinks={footerLinks.comicsLinks} policyLinks={footerLinks.policyLinks} shopLinks={footerLinks.shopLinks} siteLinks={footerLinks.siteLinks} />

    </>
  )

}

export default App
