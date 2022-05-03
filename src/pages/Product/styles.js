import styled from 'styled-components';

export const ProductWrapper = styled.div`
    display: flex;
    padding: 50px;
`;

export const ImageContainer = styled.div`
    flex:1;
`;

export const ProdImage = styled.img`
    width:100%;
    height: 90vh;
    object-fit: cover;
`;

export const InfoContainer = styled.div`
    flex:1;
    padding: 0 50px;
`;

export const ProdTitle = styled.h1`
    font-weight: 200;
    margin: 0;
    padding: 0;
`;
export const ProdDesc = styled.div`
    margin: 5px;
`;
export const ProdPrice = styled.p`
    font-weight: 100;
    font-size: 40px;
    margin: 0;
    padding: 0;
`;
export const ProdQuantity = styled.div`
    margin: 5px;
`; 
export const ProdOption = styled.div`
    margin: 5px;
`;
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`

`;

export const RadioButton = styled.input.attrs({ type: 'radio' })`

`;

