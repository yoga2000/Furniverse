import React from "react";
import { FileNotFound } from "../assets/svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-purple">
      <div className="h-screen flex  justify-center container items-center  mx-auto">
        <FileNotFound />
        <Link to="/" className="btn text text-slate-950">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
