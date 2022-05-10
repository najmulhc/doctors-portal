import React from "react";
import treatment from "../../images/treatment.png"
const DentalCare = () => {
  return (
    <section className="container mx-auto">
      <div class=" min-h-screen bg-white">
        <div class=" md:grid-cols-2 md:grid">
          <img
            src={treatment}
            class="max-w-sm mx-auto md:ml-auto md:mr-12  rounded-lg shadow-2xl"
            alt="treatment plant"
          />
          <div className="flex flex-col justify-center w-full md:pr-[33%] text-center md:text-left px-4">
            <h1 class="text-5xl font-bold text-accent mt-4 md:mt-0">Exponential dental care, on your terms</h1>
            <p class="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button class="btn  bg-gradient-to-r from-primary to-secondary text-white border-0  md:mr-auto">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalCare;
