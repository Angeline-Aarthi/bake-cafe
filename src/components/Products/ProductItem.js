import { FavoriteOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';

import { 
    ItemContainer, 
    Circle,
    ProductImage, 
    ProductContent,
    IconContainer,
}from "./styles";

const ProductItem = ({item}) => {
    return(
        <ItemContainer>
            <Circle />
            <ProductImage src={item.img}/>
            <ProductContent>
                <IconContainer> 
                    <ShoppingCartOutlined />
                </IconContainer>
                <IconContainer>
                    <SearchOutlined />
                </IconContainer>
                <IconContainer>
                    <FavoriteOutlined />
                </IconContainer>
            </ProductContent>
        </ItemContainer>
    )
}

export default ProductItem;