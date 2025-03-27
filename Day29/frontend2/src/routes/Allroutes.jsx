import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Product from '../pages/Product';

export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/'element={<Home/>}></Route>
            <Route path='/login'element={<Login/>}></Route>
            <Route path='/Signup'element={<Signup/>}></Route>
            <Route path='/Products'element={<Product/>}></Route>
        </Routes>
    </div>
  )
}
