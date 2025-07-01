import React,{useContext} from 'react';
import { FaSearch, FaShoppingCart, FaMapMarkerAlt, FaBars  } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import logo from '../../assets/amazon-logo.webp';
import indian_flag from '../../assets/R.png';
import './Header.css';

import { CartContext } from '../../components/contextAPI/cartContext.jsx';
import { Link } from 'react-router-dom';

const Header = ({topRef}) => {
  const username = localStorage.getItem("Username");
   const { cartCount } = useContext(CartContext);
  
  return (
    <header className="header" ref={topRef}>
      {/* Top section */}
      <div className="header-top">
        <div className="header-left">
          <div className="logo">
            <img src={logo} alt="Amazon Logo" />
          </div>
           <div className="location">
            <div className="y-axis">
              <span className="location-line1">Delivering to Kolkata 70006</span>
              <span className="location-line2">
                <FaLocationDot/>
                Update location
              </span>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="search-bar">
            <select className="category-select">
              <option value="all">All</option>
            </select>
            <input type="text" placeholder="Search Amazon.in" />
            <button className="search-btn"><FaSearch/></button>
          </div>
          <div className="header-right">
            <div className="language">
              <img src={indian_flag} alt="" />
              <div className="selected-lang">EN</div>
            </div>
            <div className="account">
              <div className="y-axis">
                <span>Hello, <b  id='acc'>{username? username: "Sign in"}</b></span>
                <strong>Account & Lists</strong>
              </div>
            </div>
            <div className="orders">
              <div className="y-axis">
                <span>Returns</span>
                <strong>& Orders</strong>
              </div>
            </div>
            <Link to="/carts" className="cart">
              <div className="cart-box">
                  <div className="cart-count">
                    <span id="number">{cartCount}</span>
                    <FaShoppingCart size={20} className='cart-logo'/> 
                  </div>
                  <span>Cart</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <nav className="nav-links">
        <div className="menu">
          <IoMenuSharp className="menu-icon" size={25} color='white'/>
          <span>ALL</span>
        </div>
        {[
          'Fresh', 'MX Player', 'Sell', 'Bestsellers', 'Mobiles',
          'Prime', "Today's Deals", 'Customer Service', 'Fashion',
          'New Releases', 'Amazon Pay', 'Electronics', 'Home & Kitchen', 'Computers'
        ].map((item, i) => (
          <span id={`index-${i}`} className='catagoris' key={i}>{item}</span>
        ))}
      </nav>
    </header>
  );
};

export default Header;

