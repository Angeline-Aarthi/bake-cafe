import React from "react";
import {
    ProductWrapper, 
    ImageContainer,
    ProdImage,
    InfoContainer,
    ProdTitle,
    ProdPrice,
    ProdDesc,
    ProdQuantity,
    ProdOption,
    CheckBox,
    RadioButton
} from "./styles";
import Cake from "../../images/cake.jpg";

const Product = () => {
    return(
        <ProductWrapper>
            <ImageContainer> 
                <ProdImage src={Cake}/>
            </ImageContainer>
            <InfoContainer>
                <ProdTitle>Chocolate Truffle Cake</ProdTitle>
                <ProdDesc>Product Details:</ProdDesc>
                <ul>
                    <li>Cake Flavour- Truffle</li>
                    <li>Weight- Half Kg</li>
                    <li>Shape- Round</li>
                    <li>Serves- 4-6 People</li>
                    <li>Size- 6 inches in Diameter</li>
                </ul>
                <ProdPrice>Rs.499</ProdPrice>
                {/* <ProdQuantity>
                    <CheckBox>500 g</CheckBox>
                    <CheckBox>1 kg</CheckBox>
                    <CheckBox>2 kg</CheckBox>
                </ProdQuantity>
                <ProdOption>
                    <RadioButton>With Egg</RadioButton>
                    <RadioButton>Eggless</RadioButton>
                </ProdOption> */}
                
            </InfoContainer>
        </ProductWrapper>
    )
}

export default Product;