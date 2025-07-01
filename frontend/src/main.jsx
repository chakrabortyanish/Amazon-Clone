import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route,Routes, RouterProvider } from 'react-router-dom'
import SignUp from './components/signup-login/SignUp.jsx';
import LogIn from './components/signup-login/LogIn.jsx';
import AllItems from './components/allItems/AllItems.jsx';

import { CartProvider } from './components/contextAPI/cartContext.jsx';
import Cart from './components/cart/Cart.jsx';

const Router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<App/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/products' element={<AllItems/>}></Route>
        <Route path='/carts' element={<Cart/>}></Route>
      </>
    )
  )

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={Router}/>
  </CartProvider>
)
