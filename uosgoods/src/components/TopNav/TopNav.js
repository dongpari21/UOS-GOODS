import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import { TopNavStyle } from "./style";
import styled from 'styled-components';


const TopNav = () => {
  const [isHidden, setIsHidden ] = useState(false);
  function hiddenDiv(){
    setIsHidden(!isHidden);
  }
  return (
    <>
    <TopNavStyle>
      <Link to = "/" style={{ fontFamily: "Noto Sans KR", fontWeight: "bold", color: "white", textDecoration: "none" }}><h1>UOS GOODS</h1></Link>
      <Link to="/cart" style={{ fontFamily: "Noto Sans KR", fontWeight: "bold", color: "white", textDecoration: "none", marginLeft: "2rem" }}>  장바구니  </Link>
    </TopNavStyle>
    {!isHidden && 
    <div>
      <Link to="/jacket" style={{ fontFamily: "Noto Sans KR", fontWeight: "bold", color: "black", textDecoration: "none", marginLeft: "2rem", fontSize: "2rem"}}> 과잠 </Link>
      <Link to="/goods" style={{ fontFamily: "Noto Sans KR", fontWeight: "bold", color: "black", textDecoration: "none" ,marginLeft: "2rem", fontSize:"2rem" }}> 굿즈 </Link>
    </div>
    }
    </>
  );
};

export default TopNav;