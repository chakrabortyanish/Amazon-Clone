import React, {useContext} from 'react'
import "./allItem.css"
import { AllProducts } from './allItems.js'
import Header from "../../components/header/Header.jsx"
import Footer from '../footer/Footer.jsx';

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../components/contextAPI/cartContext.jsx';

const AllItems = () => {
    const navigate = useNavigate();
    const { setCartCount } = useContext(CartContext);

    let handleCart = (e)=>{
        const username = localStorage.getItem("Username");
        if(!username){
          setTimeout(()=>{
            navigate("/signup");
          }, 1000)
          return
        }
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];

        let validateItem = storedItems.find((item) => item.id == e.target.id)
        if(validateItem){
            alert("Product already added.")
            return
        }

        let item = AllProducts.find((item) => item.id == e.target.id)
        storedItems.push(item);

        localStorage.setItem('items', JSON.stringify(storedItems));
        setCartCount(storedItems.length);
        // console.log(storedItems)
    }

    

  return (
    <>
        <Header/>
        <div className="item-container">
            {
                AllProducts.map((item)=>(
                    <div key={item.id} className="item">
                        <img src={item.img} alt="" />
                        <h2 className="name">{item.name}</h2>
                        <div className='price'>$ {item.price}</div>
                        <button id={item.id} onClick={handleCart} className='add-to-cart'>Add to cart</button>
                    </div>
                ))
            }
        </div>
        <Footer/>
    </>
  )
}

export default AllItems
