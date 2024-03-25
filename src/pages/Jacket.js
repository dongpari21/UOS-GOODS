import {React, useEffect}from "react";
import TopNav from '../components/TopNav/TopNav';
import Button from '../components/Button/Button';
import Product from "../components/Product/Product";
import { Link } from 'react-router-dom';


const goToProductPage = () => {
    console.log("Hello");
}
const products = [
    { name: "검정색 과잠", price: "55,000", image: "jacket1.png" }, // 이미지 이름 확인
    { name: "네이비 과잠", price: "55,000", image: "jacket3.png" }, // 이미지 이름 확인
    { name: "컴퓨터과학부 과잠", price: "95,000", image: "jacket2.png"}, // 이미지 이름 확인
];  
const Jacket = () => {
    return (
        <div>
            <TopNav />
            {products.map((product) => (
                <Product onClick={goToProductPage} key={product.name} {...product} />
            ))}
            
        </div>
    );  
    
}

export default Jacket;