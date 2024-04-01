import React from "react";
import { DirectionAwareHover } from "./DirectionAwareHover";
import { Link } from "react-router-dom";
import { Rupees } from "../../assets/svg";

("use client");

const FeaturedProductList = ({ name, image, id, price }) => {
  return (
    <Link
      to={`/page/${id}`}
      className="  relative  flex items-center justify-center"
      key={id}
    >
      <DirectionAwareHover imageUrl={image}>
        <p className="font-bold uppercase tracking-wide text-green-950 text-xl">
          {name}
        </p>
        <p className="font-semibold text-slate-950 tracking-widest text-md">
          <Rupees /> {price}
        </p>
      </DirectionAwareHover>
    </Link>
  );
};

export default FeaturedProductList;
