import React from "react";
import FeaturedProductList from "./ui/FeaturedProductList";
import { useProduct } from "../Context/ProductContext";
import { Loading } from "../Loading/Loading";

const FeaturedPage = () => {
  const { featuredProducts, loading } = useProduct();
  const featured = featuredProducts && featuredProducts.slice(0, 3);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-grey">
      <div>
        <h1 className="text-red  w-fit mx-auto font-[ubunutu] text-center pt-4">
          Crafted with Excellent Material
        </h1>
      </div>

      <div className="grid container mx-auto  pt-4 md:pt-1 lg:h-[35rem] gap-y-12 lg:grid-cols-3  grid-cols-1">
        {featured &&
          featured.map((products) => (
            <FeaturedProductList key={products.id} {...products} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedPage;
