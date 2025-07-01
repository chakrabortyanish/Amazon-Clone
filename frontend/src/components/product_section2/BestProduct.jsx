import React, { useRef } from "react";
import "./BestProduct.css";
import product1 from "../../assets/combineItemImg/10.jpg";
import product2 from "../../assets/combineItemImg/6.jpg";
import product3 from "../../assets/combineItemImg/8.jpg";
import product4 from "../../assets/combineItemImg/2.jpg";
import product5 from "../../assets/combineItemImg/5.jpg";
import product6 from "../../assets/combineItemImg/6.jpg";
import product7 from "../../assets/combineItemImg/7.jpg";
import product8 from "../../assets/combineItemImg/1.jpg";
import product9 from "../../assets/combineItemImg/7.jpg";
import product10 from "../../assets/combineItemImg/10.jpg";

const images = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];

const BestProduct = () => {
  const sliderRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="product-slider-wrapper">
      <h2>Up to 75% off | Bestsellers from Small Businesses <span>See more</span></h2>

      <div className="slider-container">
        <button className="arrow-btn left" onClick={() => scroll("left")}>❮</button>
        <div className="product-slider" ref={sliderRef}>
          {images.map((img, index) => (
            <div className="product-card" key={index}>
              <img src={img} alt={`product-${index}`} />
            </div>
          ))}
        </div>
        <button className="arrow-btn right" onClick={() => scroll("right")}>❯</button>
      </div>
    </div>
  );
};

export default BestProduct;