import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import logo from '../../assets/amazon-black-image.jpg';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value, e.target)
    setFormData({ ...formData, [name]: value });
    // console.log({ [name]: value })
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
    } else {
      try{
        const response = await fetch("https://amazon-clone-backend-ittk.onrender.com/user/signup",
          {
            method: "POST",
            headers:{ 'Content-Type' : 'application/json'},
            body : JSON.stringify(formData)
          },
        );
        const result = await response.json();       
        const {message, success} = result;
        if(success){
          setSuccessMessage(message);
          setTimeout(()=>{
            navigate("/login");
          }, 2000)
        }else{
           alert(message);
        }
        setErrors({})
      } catch(err){
           alert(err);
      }
      // console.log("Form Data Submitted:", formData);
    }
  };
  return (
    <div className="signup-container">
      <div className="amazon-logo">
        <img src={logo} alt="Amazon Logo" />
      </div>
      <div className="container">
        <h2>REGISTRATION</h2>
        <form onSubmit={handleSubmit}>
          <div className="name from-text">
            <div className="fullname">
              <div className="first-name">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="last-name">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            </div>
            <p className="form-err">{errors.firstName ? errors.firstName: null}</p>
          </div>
          <div className="mail from-text">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <p className="form-err">{errors.email ? errors.email: ""}</p>
          </div>
          <div className="password from-text">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <p className="form-err">{errors.password ? errors.password: ""}</p>
          </div>
            <button id="submit" type="submit">Create Account</button>
        </form>
        <div className="already-account">Already have an account?<Link className="Link" to="/login">Login</Link></div>
        {successMessage && <p id="success">{successMessage}</p>}
        </div>
    </div>
  )
}

export default SignUp
