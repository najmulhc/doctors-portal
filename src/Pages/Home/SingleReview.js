import React from "react";

const SingleReview = ({ review }) => {
  return (
    <div className="card  bg-base-100 shadow-md my-4 mx-8">
      <div className="card-body">
        <p className="mb-4">{review.description}</p>
        <div className="flex items-center gap-4">
          <img src={review.img} className="border-2 border-primary rounded-full p-1" alt="" />
          <div>
            <h2 className="font-bold text-3xl text-accent">{review.name}</h2>
            <h3 className="font-semibold ">{review.address}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
