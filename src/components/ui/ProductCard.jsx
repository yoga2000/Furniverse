import React from "react";
import { Link, useParams } from "react-router-dom";
import { Rupees } from "../../assets/svg";

export const ProductCard = ({ name, image, id, price }) => {
  return (
    <div className="col-span-1 my-2">
      <Link to={`/page/${id}`} className="group block overflow-hidden">
        <img
          src={image}
          alt={image}
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div className="relative flex justify-between items-center pt-3">
          <h3 className="text-base capitalize text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>

          <p className="">
            <span className="sr-only"> Regular Price </span>

            <span className="tracking-wider text-gray-900">
              <Rupees /> {price}{" "}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};
