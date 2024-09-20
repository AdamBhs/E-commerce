import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoWhatsapp, IoMailOutline } from "react-icons/io5";
import "./footerStyle.css";
import appelPay from "../../assets/images/apple-pay.png"
import card from "../../assets/images/card.png"
import visa from "../../assets/images/visa.png"
import googlePay from "../../assets/images/google-pay.png"
import paypal from "../../assets/images/paypal.png"

export default function Footer() {
  return (
    <footer>
      <div className="container content">
        <div className="boutique">
          <h1 className="logo">SHOP.CO</h1>
          <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

          <div className="social-media">
            <div><IoLogoTwitter /></div>
            <div><IoLogoFacebook /></div>
            <div><IoLogoInstagram /></div>
            <div><IoLogoWhatsapp /></div>
          </div>
        </div>

        <div className="options">
          <h4>COMPANY</h4>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="options">
          <h4>Help</h4>
          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="options">
          <h4>FAQ</h4>
          <ul>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        <div className="options">
          <h4>RESOURCES</h4>
          <ul>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      <div className="container line"></div>

      <div className="container all-rights">
        <p className="copy-rights">Shop.co © 2000-2024, All Rights Reserved</p>
        <div className="payement-methods">
          <div><img src={visa} alt="" /></div>
          <div><img src={card} alt="" /></div>
          <div><img src={paypal} alt="" /></div>
          <div><img src={appelPay} alt="" /></div>
          <div><img src={googlePay} alt="" /></div>
        </div>
      </div>

      <div className="container offers">
        <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        <div className="email">
          <div className="email-input">
            <IoMailOutline className="mail-icon"/>
            <input type="text" placeholder="Enter your email address" />
          </div>
          <div className="subscribe">
            Subscribe to Newsletter
          </div>
        </div>
      </div>

    </footer>
  )
}
