import React from 'react';
import Contact from './Contact';
import DentalCare from './DentalCare';
import Hero from './Hero';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <main>
           <Hero/>
           <Info/>
           <Services/>
           <DentalCare/>
            <Testimonials/>
            <Contact/>
        </main>
    );
};

export default Home;