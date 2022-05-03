import React from 'react';
import { 
    CategoryItemContainer,
    CategoryImage,
    CategoryContent,
    CategoryTitle,
    Button
 } from "./styles";
const CategoryItem = ({item}) => {
    return (
        <CategoryItemContainer>
            <CategoryImage src={item.img}/>
            <CategoryContent>
                <CategoryTitle>{item.title} </CategoryTitle>
                <Button> SHOP NOW</Button>
            </CategoryContent>
        </CategoryItemContainer>
    )
}

export default CategoryItem;