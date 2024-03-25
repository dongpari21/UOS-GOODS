import React from "react";
import { ProductStyle } from "./style";

const Product = ({ name, price, image }) => {
    return (
    <ProductStyle>
      <div className="product">
        <img src={`/images/${image}`} alt={name} />
        <h3>{name}</h3>
        <p>가격: {price}원</p>
      </div>
    </ProductStyle>
    );
  };

export default Product;