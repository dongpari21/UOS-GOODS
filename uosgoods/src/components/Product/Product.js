import React from "react";
import { ProductStyle } from "./style";
import { Link } from 'react-router-dom';

const Product = ({ name, price, image }) => {
    return (
    <ProductStyle>
      <div className="product">
        <Link to={`/product/${name}`} style={{textDecoration: "none", color : "black"}}>
        <img src={`/images/${image}`} alt={name} />
        <h3>{name}</h3>
        <p>가격: {price}원</p>
        </Link>
      </div>
    </ProductStyle>
    );
  };

export default Product;