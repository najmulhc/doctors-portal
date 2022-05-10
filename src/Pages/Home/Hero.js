import React from "react"; 
import chair from "../../images/chair.png"
import ActionBtn from "../Shared/ActionBtn";
const Hero = () => {
  return (
    <div className=" " >
      <div class="hero min-h-screen ">
      <div class="hero-overlay bg-[url('https://i.ibb.co/NjjN6sN/bg.png')] bg-opacity-20"></div>
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            class="max-w-sm md:max-w-lg rounded-lg shadow-2xl"
            alt="chair imgae"
          />
          <div>
            <h1 class="text-5xl text-accent font-bold">Your new smiles starts here</h1>
            <p class="py-6 md:w-2/3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <ActionBtn class="">Get Started</ActionBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
