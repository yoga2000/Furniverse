import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import FeaturedPage from "../components/FeaturedPage";
import { Testimonial } from "../components/Testimonial";
import Footer from "../components/Footer";
import { useProduct } from "../Context/ProductContext";

const Home = () => {
  const { state } = useProduct();
  console.log(state);
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
