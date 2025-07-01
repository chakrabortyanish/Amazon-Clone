import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from '../../assets/amazon-black-image.jpg';

const LogIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid email format");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");  
      return;
    }
    const response = await fetch("https://amazon-clone-backend-ittk.onrender.com/user/login",
          {
            method: "POST",
            headers:{ 'Content-Type' : 'application/json'},
            body : JSON.stringify({email, password})
          },
      );
    const result = await response.json();  
    console.log(result)     
    const {message, success, Name} = result;
    console.log(Name)
    // alert(message);
    if(success){
      localStorage.setItem("Username", Name);
      setSuccessMessage(message);
      setError("");
      setTimeout(()=>{
        navigate("/");
      }, 2000)
    }else{
      setError(message);
    }
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Amazon Logo" />
      <div className="login-box">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input className="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <p className="error">{error? error : null}</p>
          <button id="Signin" type="submit">Sign In</button>
        </form>
        <p className="success">{successMessage? successMessage: null}</p>
      </div>
    </div>
  );
}; 

export default LogIn;
