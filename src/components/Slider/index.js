import React, {useState} from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined, Image } from "@material-ui/icons";
import { SliderContainer,
         Arrow,
         SliderWrapper,
         Slide,
         ImageContainer,
         Img,
         InfoContainer,
         SliderTitle,
         SliderDesc,
         SliderButton
        } from "./styles"
import {
        sliderItems,
        sliderStartNum,
        sliderEndNum
} from "../../data";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleSliderClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > sliderStartNum ? slideIndex - 1: sliderEndNum);
        }else{
            setSlideIndex(slideIndex < sliderEndNum ? slideIndex + 1 : sliderStartNum);
        }
    }
    return(
        <SliderContainer>
            <Arrow direction="left" onClick={() => handleSliderClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <SliderWrapper slideIndex={slideIndex}>
                {/* <Slide bg="#f5fafd">
                    <ImageContainer>
                        <Img src={Img1} />
                    </ImageContainer>
                    <InfoContainer>
                        <SliderTitle> Weekend Sale</SliderTitle>
                        <SliderDesc> Get Flat 10%  on all cakes</SliderDesc>
                        <SliderButton> SHOW NOW</SliderButton>
                    </InfoContainer>
                </Slide>
                <Slide bg="#fbf0f4">
                    <ImageContainer>
                        <Img src={Img2} />
                    </ImageContainer>
                    <InfoContainer>
                        <SliderTitle>Bulk Offers</SliderTitle>
                        <SliderDesc> Get Flat 15%  on bulk orders!</SliderDesc>
                        <SliderButton>SHOW DETAILS</SliderButton>
                    </InfoContainer>
                </Slide>
                <Slide bg="#fcf1ed">
                    <ImageContainer>
                        <Img src={Img3} />
                    </ImageContainer>
                    <InfoContainer>
                        <SliderTitle>Event Offers</SliderTitle>
                        <SliderDesc> Get Customised products for special events</SliderDesc>
                        <SliderButton> LEARN MORE</SliderButton>
                    </InfoContainer>
                </Slide> */}
                {sliderItems.map((item) => (
                    <Slide key={item.id} bg={item.bgColor}>
                        <ImageContainer>
                            <Img src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <SliderTitle>{item.title}</SliderTitle>
                            <SliderDesc> {item.desc}</SliderDesc>
                            <SliderButton> {item.buttonText}</SliderButton>
                        </InfoContainer>
                    </Slide>
                ))}
            </SliderWrapper>
            <Arrow direction="right" onClick={() => handleSliderClick("right")}>
                <ArrowRightOutlined />
            </Arrow>

        </SliderContainer>
    )
}

export default Slider;