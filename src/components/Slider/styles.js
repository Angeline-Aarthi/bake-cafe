import styled  from 'styled-components';

export const SliderContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
    position: relative;
    overflow: hidden;
`;

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
`;

export const SliderWrapper = styled.div`
    height: 100%;
    display:flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bg}
`;

export const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`;

export const Img = styled.img`
    height: 100%;
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

export const SliderTitle = styled.h1`
    font-size: 70px;
    text-transform: uppercase;
`;

export const SliderDesc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
`;

export const SliderButton = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    text-transform: uppercase;
`;