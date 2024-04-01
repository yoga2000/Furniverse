import React from "react";
import hero from "../assets/hero1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="h-screen relative w-full bg-cover bg-no-repeat bg-center object-contain "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className=" absolute top-[50%] left-[10%] font-[ubuntu]  ">
        <h1 className="sm:text-4xl lg:text-6xl text-yellow font-bold ">
          Living Made Better
        </h1>
        <Link to="/product">
          <button className="btn mt-4 text">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
