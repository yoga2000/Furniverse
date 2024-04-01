import React from "react";
import Nav from "../components/Nav";
import about from "../assets/about1.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen ">
      <Nav />
      <div className="bg-blue text-slate-950 my-8 px-12 py-8">
        <h2 className="text-center text-lg ">
          {" "}
          Home/<span className="text-red">About</span>
        </h2>
      </div>
      <div className="sm:container max-w-md mx-auto px-4 lg:px-8 flex flex-col lg:flex-row lg:justify-center justify-evenly md:gap-8  items-center  min-h-screen   ">
        <div className="md:max-w-3xl lg:max-w-2xl h-full mx-auto  ">
          <img className="rounded-md" src={about} alt="about" />
        </div>
        <div className="md:max-w-3xl mx-auto">
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            nostrum nam commodi culpa. Repellat corporis iure error quia
            accusantium dolores animi, minima praesentium quasi quisquam
            officiis sapiente explicabo dolorum aperiam.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
