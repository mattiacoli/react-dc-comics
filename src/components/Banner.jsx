import digitalComics from '/img/buy-comics-digital-comics.png'
import merchandise from '/img/buy-comics-merchandise.png'
import shop from '/img/buy-comics-shop-locator.png'
import subscription from '/img/buy-comics-subscriptions.png'
import visaPower from '/img/buy-dc-power-visa.svg'

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">

        {/* Digital */}
        <figure>
          <img src={digitalComics} alt="" />
          <span>DIGITAL COMICS</span>
        </figure>

        {/* Merchandise */}
        <figure>
          <img src={merchandise} alt="" />
          <span>DC MERCHANDISE</span>
        </figure>

        {/* Subscription */}
        <figure>
          <img src={subscription} alt="" />
          <span>SUBSCRIPTIONS</span>
        </figure>

        {/* Shop Locator*/}
        <figure>
          <img src={shop} alt="" />
          <span>COMIC SHOP LOCATOR</span>
        </figure>

        {/* Power visa */}
        <figure>
          <img src={visaPower} alt="" />
          <span>DC POWER VISA</span>
        </figure>
      </div>

    </div>
  )
}