import React from 'react'
import "./product.css"
import { Link } from 'react-router-dom';
import item1 from '../../assets/combineItemImg/1.jpg';
import item2 from '../../assets/combineItemImg/2.jpg';
import item3 from '../../assets/combineItemImg/3.jpg';
import item4 from '../../assets/combineItemImg/4.jpg';
import item5 from '../../assets/combineItemImg/5.jpg';
import item6 from '../../assets/combineItemImg/6.jpg';
import item7 from '../../assets/combineItemImg/7.jpg';
import item8 from '../../assets/combineItemImg/8.jpg';
import item9 from '../../assets/combineItemImg/9.jpg';
import item10 from '../../assets/combineItemImg/10.jpg';
import image_ads from "../../assets/final-item.PNG";

import BestProduct from "../product_section2/BestProduct.jsx"

const ProductContainer = () => {
  return (
    <>
        <div className="product-container1">
            <div className="combine-box">
                <div className="combine-item">
                    <div className="item1 i1">
                        <h2>Appliances for your home | Up to 55% off</h2>
                        <div className="item-container">
                            <div className="row1">
                                <div className="col-1">
                                    <Link to="/products"><img src={item1} alt="Air Conditioners" /></Link>
                                    <p>Air Conditioners</p>
                                </div>
                                <div className="col-2">
                                    <Link to="/products"><img src={item2} alt="Air Conditioners" /></Link>
                                    <p>Refrigerators</p>
                                </div>
                            </div>
                            <div className="row2">
                                <div className="col-1">
                                    <Link to="/products"><img src={item3} alt="Air Conditioners" /></Link>
                                    <p>Washing Machines</p>
                                </div>
                                <div className="col-2">
                                    <Link to="/products"><img src={item4} alt="Air Conditioners" /></Link>
                                    <p>Microwaves</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item1 i2">
                        <h2>Revamp your home in style</h2>
                        <div className="item-container">
                            <div className="row1">
                                <div className="col-1">
                                    <Link to="/products"><img src={item5} alt="Air Conditioners" /></Link>
                                    <p>Air Conditioners</p>
                                </div>
                                <div className="col-2">
                                    <Link to="/products"><img src={item6} alt="Air Conditioners" /></Link>
                                    <p>Refrigerators</p>
                                </div>
                            </div>
                            <div className="row2">
                                <div className="col-1">
                                    <Link to="/products"><img src={item7} alt="Air Conditioners" /></Link>
                                    <p>Washing Machines</p>
                                </div>
                                <div className="col-2">
                                    <Link to="/products"><img src={item8} alt="Air Conditioners" /></Link>
                                    <p>Microwaves</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item1">
                        <h2>PlayStation 5 Slim & Accessories | No Cost </h2>
                        <div className="item-container">
                            <div className="row1">
                                <div className="col-1">
                                    <Link to="/products"><img src={item10} alt="Air Conditioners" /></Link>
                                    <p>Air Conditioners</p>
                                </div>
                                <div className="col-2">
                                    <Link to="/products"><img src={item2} alt="Air Conditioners" /></Link>
                                    <p>Refrigerators</p>
                                </div>
                            </div>
                            <div className="row2">
                                <div className="col-1">
                                    <Link to="/products"><img src={item6} alt="Air Conditioners" /></Link>
                                    <p>Washing Machines</p>
                                </div>
                                <div className="col-2">
                                   <Link to="/products"><img src={item9} alt="Air Conditioners" /></Link>
                                    <p>Microwaves</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item1">
                        <h2>PlayStation 5 Slim & Accessories | No Cost </h2>
                        <div className="item-container">
                            <div className="row1">
                                <div className="col-1">
                                    <Link to="/products"><img src={item1} alt="Air Conditioners" /></Link>
                                    <p>Air Conditioners</p>
                                </div>
                                <div className="col-2">
                                    <Link to="/products"><img src={item4} alt="Air Conditioners" /></Link>
                                    <p>Refrigerators</p>
                                </div>
                            </div>
                            <div className="row2">
                                <div className="col-1">
                                    <Link to="/products"><img src={item2} alt="Air Conditioners" /></Link>
                                    <p>Washing Machines</p>
                                </div>
                                <div className="col-2">
                                   <Link to="/products"><img src={item7} alt="Air Conditioners" /></Link>
                                    <p>Microwaves</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="best-product-container">
            <BestProduct/>
            <div className="ads">
                <img src={image_ads} alt="image-ads" />
            </div>
        </div>
    </>
  )
}

export default ProductContainer;
