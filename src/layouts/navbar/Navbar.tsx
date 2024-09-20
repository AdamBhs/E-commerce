import "./navbarStyle.css";
import { IoPersonCircleOutline, IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="container">
      <Link to="/">
        <h1 className="logo">SHOP.CO</h1>
      </Link>
      <div className="nav-links">
        
        <ul>
          <li>Shope</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
      </div>

      <div className="search">
        <IoSearchOutline />
        <input type="text" placeholder="Search for products..."/>
      </div>
      <div className="shop-account">
        <IoCartOutline className="icon"/>
        <IoPersonCircleOutline className="icon"/>
      </div>
    </nav>
  )
}
