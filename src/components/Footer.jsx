import footerLogo from '/img/dc-logo-bg.png'
import fbLogo from '/img/footer-facebook.png'
import twitterLogo from '/img/footer-twitter.png'
import youtubeLogo from '/img/footer-youtube.png'
import pinterestLogo from '/img/footer-pinterest.png'
import periscopeLogo from '/img/footer-periscope.png'


export default function Footer({ comicsLinks, policyLinks, siteLinks, shopLinks }) {
  return (
    <>

      <footer className="footer">
        <div className="container">

          {/* Links */}
          <div className="links">

            <div className="first_column">
              {/*DC List */}
              <div className="comics_list">
                <h3>DC COMICS</h3>
                <ul>
                  {comicsLinks.map(link => (
                    <li key={link.id}><a href={link.url}>{link.text}</a></li>
                  ))}

                </ul>
              </div>

              {/* Shop */}
              <div className="shop_links">
                <h3>SHOP</h3>
                <ul>
                  {shopLinks.map(link => (
                    <li key={link.id}><a href={link.url}>{link.text}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* DC Links */}
            <div className="dc_links">
              <h3>DC</h3>
              <ul>
                {policyLinks.map(link => (
                  <li key={link.id}><a href={link.url}>{link.text}</a></li>
                ))}
              </ul>
            </div>

            {/* site links */}
            <div className="site_links">
              <h3>SITES</h3>
              <ul>
                {siteLinks.map(link => (
                  <li key={link.id}><a href={link.url}>{link.text}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logo */}
          {/*        <div className="logo">
          <img src={footerLogo} alt="" />
        </div> */}
        </div>

        {/* Foot bar */}
        <div className="foot_bar">
          <div className="container">

            <div className="signUp">
              <h4>
                SIGN-UP NOW!
              </h4>
            </div>

            <div className="followUs">
              <h3>Follow Us</h3>
              <ul>
                <li><a href=""><img src={fbLogo} alt="" /></a></li>
                <li><a href=""><img src={twitterLogo} alt="" /></a></li>
                <li><a href=""><img src={youtubeLogo} alt="" /></a></li>
                <li><a href=""><img src={pinterestLogo} alt="" /></a></li>
                <li><a href=""><img src={periscopeLogo} alt="" /></a></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}