import React from "react";
import Contact from "./Contact";
import DentalCare from "./DentalCare";
import Hero from "./Hero";
import HomeAppoinement from "./HomeAppoinement";
import Info from "./Info";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <Info />
      <Services />
      <DentalCare />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
