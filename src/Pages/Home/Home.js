import React from 'react';
import DentalCare from './DentalCare';
import Hero from './Hero';
import Services from './Services';

const Home = () => {
    return (
        <div>
           <Hero/>
           <Services/>
           <DentalCare/>
        </div>
    );
};

export default Home;