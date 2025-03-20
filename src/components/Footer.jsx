import FooterLogo from '/img/dc-logo-bg.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* Links */}
        <div className="links">

          <div className="first_column">
            {/*DC List */}
            <div className="comics_list">
              <h3>DC COMICS</h3>
              <ul>
                <li><a href="">Characters</a></li>
                <li><a href="">Comics</a></li>
                <li><a href="">Movies</a></li>
                <li><a href="">TV</a></li>
                <li><a href="">Games</a></li>
                <li><a href="">Videos</a></li>
                <li><a href="">News</a></li>
              </ul>
            </div>

            {/* Shop */}
            <div className="shop_links">
              <h3>SHOP</h3>
              <ul>
                <li><a href="">Shop DC</a></li>
                <li><a href="">Shop DC Collectibles</a></li>
              </ul>
            </div>
          </div>

          {/* DC Links */}
          <div className="dc_links">
            <h3>DC</h3>
            <ul>
              <li><a href="">Terms of use</a></li>
              <li><a href="">Privacy Policy (New)</a></li>
              <li><a href="">Ad Choices</a></li>
              <li><a href="">Advertising</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Subscriptions</a></li>
              <li><a href="">Talent Workshop</a></li>
              <li><a href="">CPSC Certificates</a></li>
              <li><a href="">Ratings</a></li>
              <li><a href="">Shop Help</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>

          {/* site links */}
          <div className="site_links">
            <h3>SITES</h3>
            <ul>
              <li><a href="">DC</a></li>
              <li><a href="">MAD Magazine</a></li>
              <li><a href="">DC Kids</a></li>
              <li><a href="">DC Universe</a></li>
              <li><a href="">DC Power Visa</a></li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="logo">
          <img src={FooterLogo} alt="" />
        </div>


      </div>
    </footer>
  )
}