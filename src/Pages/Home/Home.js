import React from 'react';
import DentalCare from './DentalCare';
import Hero from './Hero';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
           <Hero/>
           <Info/>
           <Services/>
           <DentalCare/>
            <Testimonials/>
        </div>
    );
};

export default Home;