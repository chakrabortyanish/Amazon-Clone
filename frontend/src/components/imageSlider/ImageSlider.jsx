import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
import slide1 from "../../assets/slideImage/slide1.jpg";
import slide2 from "../../assets/slideImage/slide2.jpg";
import slide3 from "../../assets/slideImage/slide3.jpg";
import slide4 from "../../assets/slideImage/slide4.jpg";

const images = [slide1, slide2, slide3, slide4];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      <img src={images[index]} alt="slide" className="carousel-image" />
      <button className="arrow left" >❮</button>
      <button className="arrow right">❯</button>
    </div>
  );
};

export default ImageSlider;
