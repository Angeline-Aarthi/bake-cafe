import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;
`;

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`;

export const Center = styled.div`
   flex: 1;
   text-align: center;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const LanguageDiv = styled.div`
    font-size: 14px;
    cursor: pointer;
`;

export const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

export const Input = styled.input`
    border: none;
`;

export const Logo = styled.h1`
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: #35281E;
`;

export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: #35281E;
`;