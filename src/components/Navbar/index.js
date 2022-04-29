import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import React from 'react';
import { 
        Container,
        Wrapper,
        Left, 
        Center,
        Right, 
        LanguageDiv,
        SearchContainer, 
        Input,
        Logo,
        MenuItem
    } from './styles';

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left> 
                    <LanguageDiv> EN </LanguageDiv>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:"gray",fontSize: "16"}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo> ECOMMERCE APP </Logo></Center>
                <Right>
                    <MenuItem> REGISTER </MenuItem>
                    <MenuItem> SIGN UP </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary"> 
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>      
            </Wrapper> 
        </Container>
    )
}

export default Navbar;