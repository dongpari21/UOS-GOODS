import React from "react";
import TopNav from '../components/TopNav/TopNav';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu2 = () => {  
    return (
        <div>
            <TopNav />
            <h1>Menu2</h1>
            <Link to="/">
                <Button>홈으로 이동</Button>
            </Link>
        </div>
    );
}

export default Menu2;