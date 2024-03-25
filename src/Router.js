import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/Main';
import Jacket from './pages/Jacket';
import Goods from './pages/Goods';
import Cart from './pages/Cart';
import Menu2 from './pages/Menu2';
import Product from './components/Product/Product';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Jacket />} />
                <Route path="/jacket" element = {<Jacket />} />
                <Route path="/goods" element = {<Goods />} />
                <Route path="/cart" element = {<Cart />} />
                <Route path="/menu2" element = {<Menu2 />} />
                <Route path="/product/:name" element = "상품 상세페이지"/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router; 