import React from "react";
import {
  ProductListWrapper,
  ProductTitle,
  Filter,
  FilterContainer,
  FilterText,
  Select,
  Option
} from "./styles";

const ProductList = () => {
  return (
    <ProductListWrapper>
      {/* <ProductTitle>Cakes</ProductTitle> */}
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Category
            </Option>
            <Option>Cakes</Option>
            <Option>Hamburgers</Option>
            <Option>Pastries</Option>
            <Option>Pizzas</Option>
            <Option>Sandwiches</Option>
            <Option>Shakes</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Type
            </Option>
            <Option>Veg</Option>
            <Option>Non Veg </Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Recommended</Option>
            <Option>New</Option>
            <Option>Price: Low to High</Option>
            <Option>Price: High to Low</Option>
          </Select>
        </Filter>
      </FilterContainer>

    </ProductListWrapper>
  )
}

export default ProductList;