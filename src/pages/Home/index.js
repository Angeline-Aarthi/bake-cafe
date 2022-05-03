import React from 'react';
import Announcement from '../../components/Announcement';
import Categories from '../../components/Category';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products';
import Slider from '../../components/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <Categories />
            <Products />
        </div>
    )
}

export default Home;