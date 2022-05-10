import React from 'react';
import DentalCare from './DentalCare';
import Hero from './Hero';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
           <Hero/>
           <Info/>
           <Services/>
           <DentalCare/>
        
        </div>
    );
};

export default Home;