import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import FeaturedPage from "../components/FeaturedPage";
import { Testimonial } from "../components/Testimonial";
import Footer from "../components/Footer";
import { useProduct } from "../Context/ProductContext";
import { Loading } from "../Loading/Loading";

const Home = () => {
  const { products } = useProduct();
  console.log(products);
  return (
    <>
      <Nav />
      <Hero />
      <FeaturedPage />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
