import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import { ProductCard } from "../components/ui/ProductCard";
import MobileSideBar from "../components/ui/MobileSideBar";
import ProductHeader from "../components/ui/ProductHeader";
import { useProduct } from "../Context/ProductContext";
import { useFilterContext } from "../Context/FilerContext";
import { CATEGORY } from "../Context/actions";
import { Loading } from "../Loading/Loading";

const Product = () => {
  const { products, loading, error } = useProduct();
  const { category, sort } = useFilterContext();
  console.log(loading);
  console.log(error);

  const transformProducts = () => {
    let filteredProducts = products;

    //sorting
    if (sort) {
      filteredProducts = filteredProducts.sort((a, b) =>
        sort === "low to high" ? a.price - b.price : b.price - a.price
      );
    }
    // Category filtering
    if (category !== "all") {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === category
      );
    }
    return filteredProducts;
  };
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1> {error}</h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen ">
      <Nav />
      <div className="bg-blue text-slate-950 my-8 px-12 py-8">
        <h2 className="text-center text-lg md:text-xl lg:text-2xl ">
          Home/<span className="text-red">Product</span>
        </h2>
      </div>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <ProductHeader />

          <MobileSideBar />

          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <SideBar />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-3">
              {transformProducts() &&
                transformProducts().map((product) => (
                  <ProductCard {...product} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
