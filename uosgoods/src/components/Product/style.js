import styled from 'styled-components';

export const ProductStyle = styled.div`
    display: grid;
    flex-direction: row;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;