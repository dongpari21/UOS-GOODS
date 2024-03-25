import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopNav from "../components/TopNav/TopNav";
import Button from "../components/Button/Button"


const Cart = () => {
  // const [isHidden, setIsHidden ] = useState(false);
  
  return (
    <div>
      <TopNav /> {/* 장바구니에서만 isHidden을 사용하고싶음 */}
      <h1>장바구니</h1>
      기능을 구현하고싶었지만 시간이 부족하여 구현하지 못했습니다.
      <br />
      <Link to="/jacket">
        <Button>홈으로 이동</Button>
      </Link>
    </div>
  );
};

export default Cart;