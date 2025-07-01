import React from 'react'
import LoginAndRegistration from './LoginAndRegistration'
import "./footer.css"

const Footer = ({onScroll}) =>{

  return (
    <div className='footer'>
       <LoginAndRegistration/>
       <div className="f-container">
           <h3 onClick={onScroll}>Back to top</h3>
           <div className="info-about-company">
              <div className="info-box">
                <div className="content Get">
                    <h2>Get to Know Us</h2>
                    <p>About Amazon</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>
                </div>
                <div className="content">
                    <h2>Connect with Us</h2>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="content Make-Money">
                    <h2>Make Money with Us</h2>
                    <p>Sell on Amazon</p>
                    <p>Protect and Build Your Brand</p>
                    <p>Amazon Global Selling</p>
                    <p>Supply to Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Fulfilment by Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Amazon Pay on Merchants</p>
                    <p>Amazon Global Selling</p>
                    <p>Supply to Amazon</p>
                </div>
                <div className="content">
                    <h2>Let Us Help You</h2>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    <p>100% Purchase Protection</p>
                    <p>Press Releases</p>
                    <p>Amazon App Download</p>
                    <p>Help</p>
                </div>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Footer
