import logo from '/img/dc-logo.png'

export default function Header() {
  return (
    <header className="site_header">

      <div className='container'>
        {/* Logo */}
        <img src={logo} alt="" />
        {/* Navbar */}
        <nav>
          <ul>
            <li><a href="">CHARACTERS</a></li>
            <li><a href="">COMICS</a></li>
            <li><a href="">MOVIES</a></li>
            <li><a href="">TV</a></li>
            <li><a href="">COLLECTIBLES</a></li>
            <li><a href="">VIDEOS</a></li>
            <li><a href="">FANS</a></li>
            <li><a href="">NEWS</a></li>
            <li><a href="">SHOP</a></li>
          </ul>
        </nav>

      </div>

    </header>
  )
}