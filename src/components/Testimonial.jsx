import React from "react";
import quality from "../assets/quality.png";
import Card from "./ui/Card";
import delivery from "../assets/delivery.png";
import history from "../assets/history.png";
import Footer from "./Footer";

export const Testimonial = () => {
  return (
    <div className=" flex flex-col min-h-screen justify-evenly  border-black  pt-8 relative bg-grey">
      <div className=" mx-auto  container text-[#114232] py-4 px-8">
        <div className="grid   grid-cols-1 md:grid-cols-12 items-center    gap-4 ">
          <h2 className="  text-lg md:xl lg:2xl text-center sm:col-span-4">
            Custom Furniture Built Only For Your
          </h2>
          <p className="sm:col-span-8  leading-relaxed text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta
            nulla temporibus, eius harum quia expedita similique alias numquam
            facere porro officia, ipsam recusandae voluptatum commodi quis
            ducimus necessitatibus et.
          </p>
        </div>
      </div>
      <div className="w-full mx-auto  items-center md:grid-cols-2  grid lg:grid-cols-12  ">
        <Card name="quality" img={quality} />
        <Card name="Delivery" img={delivery} />
        <Card name="History" img={history} />
      </div>
    </div>
  );
};
