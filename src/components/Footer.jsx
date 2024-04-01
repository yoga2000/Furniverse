import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className=" py-4 px-6    max-w-4xl lg:max-w-6xl mx-auto grid grid-cols-1  md:grid-cols-12">
        <div className=" mx-auto p-4 col-span-6">
          <h1 className="my-8 md:my-4">Join our news letter and get 20% off</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur sequi, distinctio conse
          </p>
        </div>
        <div className=" flex  mx-auto p-4    items-center container  col-span-6 justify-self-end">
          <input
            className="bg-yellow rounded-l-md w-full p-2 md:p-4"
            type="text"
            placeholder="Enter Email"
          />
          <button className="bg-teal-500 hover:bg-teal-600 rounded-r-md text-base py-2 px-4 md:py-4 md:px-6 ">
            Submit
          </button>
        </div>
      </div>
      <div className="bg-slate-950  h-10 text-white flex items-center py-12 md:py-8 justify-center w-full">
        <h2 className="text-base  tracking-widest text">
          Copyright 2024 <span className="text-light-red ">Furniverse</span> All
          rights reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
