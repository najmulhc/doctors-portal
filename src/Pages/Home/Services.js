import React from "react";
import cavity from '../../images/cavity.png';
import fluoride from "../../images/fluoride.png";
import white from "../../images/whitening.png";
const Services = () => {
  return (
    <section className="my-16 container mx-auto">
      <h2 className="text-primary uppercase text-xl text-center font-bold ">
        services
      </h2>
      <h1 className="text-5xl text-accent text-center font-light ">
        Services we provide
      </h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="card  bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <img src={fluoride} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-access">Fluoride Treatment</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi
              minus  
            </p>
          </div>
        </div>
        <div className="card   bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <img src={cavity} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-access">Cavity Filing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi
              minus  
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <img src={white} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-access">Teeth Whittening</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi
              minus  
            </p>
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default Services;
