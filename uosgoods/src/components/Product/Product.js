import { React, useState } from "react";
import { ProductStyle } from "./style";
import { Link } from "react-router-dom";


const Product = ({ name, price, image }) => {
  // const [goToDetail, setGoToDetail] = useState(false);
  
  // const goToProductPage = () => {
    
  //   setGoToDetail(true);
  // }
  return (
    <ProductStyle>
      <div className="product" >
      <Link to={`/product/${name}`} style={{fontFamily: "Noto Sans KR", fontWeight: "bold", color: "black", textDecoration: "none"}}>
        <img src={`/images/${image}`} alt={name} />
        <h3>{name}</h3>
        <p>가격: {price}원</p>
      </Link>
      </div>
    </ProductStyle>
    );
  };

export default Product;