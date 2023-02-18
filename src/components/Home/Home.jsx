import React from 'react';
import HeaderNav from './HomeSections/HeaderNav';
import Hero from './HomeSections/Hero';
import ProductCollection from './HomeSections/ProductCollection';

const Home = () => {
    return (
        <section>
            <HeaderNav />
            <Hero></Hero>
            <ProductCollection></ProductCollection>
        </section>
    );
};

export default Home;
