import React from 'react';

import Announcement from './components/Announcement';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Greet from './components/Greet';

import Home from './pages/Home';
import Product from './pages/Product';


const App = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Product />
            <Footer />
        </div>
    )
}
export default App;