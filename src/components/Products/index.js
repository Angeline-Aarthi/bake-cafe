import React from 'react';
import {
    ProductsContainer
} from "./styles";
import { popularProducts } from '../../data';
import ProductItem from './ProductItem';

const Products = () => {
    return(
        <ProductsContainer>
            {popularProducts.map((item) => (
                <ProductItem item={item} key={item.id}/>
            ))}
        </ProductsContainer>
    )
}

export default Products;