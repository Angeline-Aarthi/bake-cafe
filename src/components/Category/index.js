import React from 'react';
import { categories } from '../../data';
import CategoryItem from './categoryItem';
import { CategoryContainer } from "./styles";


const Categories = () => {
    return (
        <CategoryContainer>
        {categories.map((item) => (
            <CategoryItem key={item.id} item={item} />
        ))}
        </CategoryContainer>
    )
}

export default Categories;