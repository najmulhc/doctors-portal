import React from "react";
import quote from "../../icons/quote.svg";
import SingleReview from "./SingleReview";
import people1 from "../../images/people1.png"
import people2 from "../../images/people2.png"
import people3 from "../../images/people3.png"
const Testimonials = () => {
    const reviews = [
        {
            description:" purchased this for my two month old daughter hoping she could wear it on days we were home. It looked a little small for 0-3 months but this is not that hard for us",
            img: people1, 
            name:"John Doe",
            address:"89C, Liverpool Street, London"
        },
        {
            description:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2, 
            name:"Tom Hanks",
            address:"71, Norfolk Street, London"
        },
        {
            description:"Our baby clothes are designed to keep your little one feeling at their best and to bring parents peace of mind. With easy-to-change features, safety features.",
            img: people3, 
            name:"Steve Smith",
            address:"2/A, Herdford Street, London"
        },

    ]
  return (
    <section className="container mx-auto my-8 px-4">
      <div className="flex justify-between ">
        <div className="">
          <h1 className="text-primary uppercase text-xl text-left font-bold ">
            Testimonials
          </h1>
          <h1 className="text-5xl text-accent text-left font-light ">
            What our clients say
          </h1>
        </div>
        <img src={quote} className="w-40 md:w-64" alt="" />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1">
          {
              reviews.map(review => <SingleReview review={review} />)
          }
      </div>
    </section>
  );
};

export default Testimonials;
