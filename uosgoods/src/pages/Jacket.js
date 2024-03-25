import React from "react";
import TopNav from '../components/TopNav/TopNav';
import Button from '../components/Button/Button';
import Product from "../components/Product/Product";
import { Link } from 'react-router-dom';

const Jacket = () => {
    const products = [
        { name: "jacket1", price: 10000, image: "jacket1.png" }, // 이미지 이름 확인
        { name: "jacket2", price: 10000, image: "jacket2.png"}, // 이미지 이름 확인
        { name: "jacket3", price: 10000, image: "jacket3.png" }, // 이미지 이름 확인
    ];  
    return (
        <div>
            <TopNav />
            <h1>Jackets</h1>
                {products.map((product) => (
                <Product key={product.name} {...product} />
                ))}
            <Link to="/">
                <Button>홈으로 이동</Button>
            </Link>
        </div>
    );  
    
}

export default Jacket;