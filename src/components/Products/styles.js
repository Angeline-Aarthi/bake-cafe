import styled from 'styled-components';

export const ProductsContainer = styled.div`
    padding: 20px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const ProductContent = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${ProductContent}{
        opacity: 1;
    }
`;
export const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
export const ProductImage = styled.img`
    height: 75%;
    z-index: 2;
`;

export const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;