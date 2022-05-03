import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   background-color: #eceae3;
`;

export const SocialSection = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const CopyrightInfo = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #35281E;
    margin-left: 5px;
`;

export const SocialContainer = styled.div`
    display: flex;
`;

export const IconContainer = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: ${props => props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
`;
export const Center = styled.div`
    flex:1;
`;
export const ContactUsSection = styled.div`
    flex:1;
`;

export const Title = styled.h1`
    font-size: 18px;
    line-height: 22px;
`;

export const ContactItem = styled.div`
   margin-bottom: 10px;
   display: flex;
   align-items: center;
   svg{
        margin-right: 10px;
    }
`;
