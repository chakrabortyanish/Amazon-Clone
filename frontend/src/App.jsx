import React,{useRef, useEffect, useState} from 'react';
import Header from './components/header/Header.jsx';
import ImageSlider from './components/imageSlider/ImageSlider.jsx';
import ProductContainer from './components/products/ProductContainer.jsx';
import Footer from './components/footer/Footer.jsx';
import AllItems from './components/allItems/AllItems.jsx';


function App() {
  const topRef = useRef(null);
   const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('items')) || [];
    setCartCount(stored.length);
  }, []);

  const handleScrollToTop = () => {
    if (topRef.current) {
      console.log(topRef.current)
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='app-container'>
      <Header topRef={topRef}/>
      <ImageSlider/>
      <ProductContainer/>
      <Footer onScroll={handleScrollToTop} />
    </div>
  )
}

export default App
