import React from "react";
import TopNav from '../components/TopNav/TopNav';
import Button from '../components/Button/Button';
import Product from "../components/Product/Product";
import { Link } from 'react-router-dom';

const Goods = () => {
    const products = [
        { name: "이루미 키링", price: "5,000", image: "keyRings.png" }, // 이미지 이름 확인
        { name: "이루미 인형", price: "25,000", image: "Dolls.png" }, // 이미지 이름 확인
    ];  
    return (
        <div>
            <TopNav />
                {products.map((product) => (
                <Product key={product.name} {...product} />
                ))}
            <Link to="/">
                <Button>홈으로 이동</Button>
            </Link>
        </div>
    );  
} 

export default Goods;