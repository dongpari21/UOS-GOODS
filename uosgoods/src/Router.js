import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/Main';
import Jacket from './pages/Jacket';
import Goods from './pages/Goods';
import Cart from './pages/Cart';
import Menu2 from './pages/Menu2';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element = {<Main />} />
               <Route path="/jacket" element = {<Jacket />} />
               <Route path="/goods" element = {<Goods />} />
               <Route path="/cart" element = {<Cart />} />
               <Route path="/menu2" element = {<Menu2 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router; 