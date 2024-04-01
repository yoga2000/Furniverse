import React from "react";

const StarRating = ({ value }) => {
  const numberOfStars = Math.floor(value); // Round down to the nearest integer

  // Create an array of length equal to the value
  const stars = Array.from({ length: numberOfStars }, (_, index) => (
    <span key={index}>&#9733;</span> // Render a star using Unicode character
  ));

  return (
    <div className="flex items-center gap-4 ">
      <h2 className="text-md capitalize font-bold sm:text-xl">Rating</h2>

      <h2 className="text-md uppercase font-bold sm:text-xl">
        {value}{" "}
        <span className="pl-2 tracking-widest text-amber-500">{stars}</span>{" "}
      </h2>
    </div>
  );
};

export default StarRating;
