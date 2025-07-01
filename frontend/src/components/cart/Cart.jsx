import React, { useEffect, useState, useContext } from 'react';
import Header from '../../components/header/Header.jsx';
import Footer from '../../components/footer/Footer.jsx';
import { useNavigate, Link } from 'react-router-dom';

import { CartContext } from '../../components/contextAPI/cartContext.jsx';

import "./cart.css"

const Cart = () => {
    const navigate = useNavigate();
    const { setCartCount } = useContext(CartContext);

    const username = localStorage.getItem("Username");
    if(!username){
        setTimeout(()=>{
        navigate("/signup");
        }, 1000)
        return
    }
  const [cartItems, setCartItems] = useState([]);

  // Load data from localStorage when component mounts
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('items')) || [];
    setCartItems(stored);
  }, []);

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price), 0);
  
  function handleCheckout(){
    localStorage.removeItem('items');
    setCartItems([]);
    setCartCount(0)
    alert("Order Confirmed!");
  }

  return (
    <>
      <div className="main-cart-container">
        <h2 className='header-name'>Shopping Cart</h2>
        <div className="cart-container">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <h2>Your cart is empty.</h2>
                <Link to="/">Go to home</Link>
              </div>
            ) : (
              <div className="cart-items">
                <div className="cart-items-container">
                      {cartItems.map((item, i) => (
                      <div className="product-container" key={i}>
                        <div className="cart-item">
                          <img src={item.img} alt={item.name} width="100" />
                          <div className='product-info'>
                            <div className="top">
                              <h3>{item.name}</h3>
                              <p>Quentity 1</p>
                            </div>
                            <p>In stock</p>
                          </div>
                          <div className="right-box">
                            <p>$ {item.price}</p>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                          </div>
                      </div>
                      </div>
                    ))}
                </div>
                <div className="checkout-box">
                  <div className="checkout-info">
                    <h2>Username: <span>{username}</span></h2>
                    <p>Total products: <span>{cartItems.length}</span></p>
                    <p>Total price: $ <span>{totalPrice.toFixed(2)}</span></p>
                  </div>
                  <button onClick={handleCheckout}>Checkout</button>
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default Cart;
