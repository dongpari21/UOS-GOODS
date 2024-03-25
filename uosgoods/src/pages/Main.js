import react from 'react';
import styled from 'styled-components';
import TopNav from '../components/TopNav/TopNav';
import Button from '../components/Button/Button';

const Main = () => {
    return (
        <div>
            <TopNav />
            <h1>Main</h1>
            <Button children={"hello"} />
        </div>
    );
    }

export default Main;