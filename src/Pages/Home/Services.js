import React from "react";
import fluoride from "../../images/fluoride.png";
import cavity from '../../images/cavity.png';
import white from "../../images/whitening.png"
const Services = () => {
  return (
    <section className="my-8 container mx-auto">
      <h2 className="text-primary uppercase text-xl text-center font-bold ">
        services
      </h2>
      <h1 className="text-5xl text-accent text-center font-light ">
        Services we provide
      </h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div class="card  bg-base-100 shadow-xl ">
          <figure class="px-10 pt-10">
            <img src={fluoride} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-access">Fluoride Treatment</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi
              minus  
            </p>
          </div>
        </div>
        <div class="card   bg-base-100 shadow-xl ">
          <figure class="px-10 pt-10">
            <img src={cavity} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-access">Cavity Filing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi
              minus  
            </p>
          </div>
        </div>
        <div class="card  bg-base-100 shadow-xl ">
          <figure class="px-10 pt-10">
            <img src={white} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-access">Teeth Whittening</h2>
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
