import styled  from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    ${props => props.announcement && `
        height: 30px;
        background-color: teal;
        color: white;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
    `}
    
    
    
`;