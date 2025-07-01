import React from 'react'
import { Link } from 'react-router-dom'

const LoginAndRegistration = () => {
  return (
    <div id='login-container'>
        <h2>See personalized recommendations</h2>
        <Link className='signin' to="/login">Sign in</Link>
        <div className="registration">
            <p>New customer?</p>
            <Link to="/signup">Start here</Link>
        </div>
    </div>
  )
}

export default LoginAndRegistration
