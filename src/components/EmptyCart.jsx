import React from "react";
import { Link } from "react-router-dom";
import empty from "../assets/emptycart.png";
import { CartSvg } from "../assets/svg";

const EmptyCart = () => {
  return (
    <section className="overflow-hidden bg-purple  h-screen sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Shopping Cart is empty !!
          </h1>

          <div className="mt-4 md:mt-8">
            <Link
              to="/product"
              className="inline-block tracking-widest  text rounded bg-emerald-600 px-12 py-3  font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Fill it
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-full    object-cover sm:h-full">
        <CartSvg />
      </div>
    </section>
  );
};

export default EmptyCart;
