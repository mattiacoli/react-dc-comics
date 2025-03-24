import logo from '/img/dc-logo.png'
import Nav from '../components/Nav'

export default function Header({ linksList }) {
  return (
    <header className="site_header">

      <div className='container'>
        {/* Logo */}
        <img src={logo} alt="" />
        {/* Navbar */}
        <Nav links={linksList} />
      </div>

    </header>
  )
}


