import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
import { SINGLE_PRODUCT_URL as URL } from "../helpers/utils";
import StarRating from "../components/ui/StarRating";
import { Comment, Facebook, Rupees, Twitter, WishList } from "../assets/svg";
import { useCartContext } from "../Context/CartContext";
import { ADD_TO_CART, DELETE_TO_CART } from "../Context/actions";
import Nav from "../components/Nav";
import { Loading } from "../Loading/Loading";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { cart, dispatch } = useCartContext();
  const { singleProduct, loading } = useProduct();
  const { id } = useParams();
  const { fetchSingleProduct } = useProduct();
  useEffect(() => {
    fetchSingleProduct(`${URL}${id}`);
  }, [id]);
  const handleCart = () => {
    dispatch({ type: ADD_TO_CART, payload: singleProduct });
    navigate("/cart");
  };
  if (singleProduct === null) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  const {
    description,
    images,
    colors,
    company,
    price,
    stars,
    stock,
    reviews,
    name,
  } = singleProduct;
  return (
    <>
      <Nav />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover shadow-md object-center rounded"
              src={images[0].url}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900  uppercase title-font font-medium mb-1">
                {name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <StarRating value={stars} />

                  <span className="text-gray-600 ml-3">
                    ({reviews} Customer Reviews)
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                  <a className="text-gray-500">
                    <Facebook />
                  </a>
                  <a className="text-gray-500">{<Twitter />}</a>
                  <a className="text-gray-500">{<Comment />}</a>
                </span>
              </div>
              <p className="leading-relaxed">{description}</p>
              <h2 className="text-sm title-font my-4 text-gray-500 capitalize tracking-widest">
                <span className="font-bold ">Brand</span> : {company}
              </h2>
              <h2 className="text-sm title-font my-4 text-gray-500 capitalize tracking-widest">
                <span className="font-bold ">Available</span> :{" "}
                {stock > 0 ? "In Stock" : "Out of Stock"}
              </h2>

              <div className="flex  items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <span className="mr-3 font-bold">Colors :</span>
                  {colors.map((color) => (
                    <input
                      className="rounded-full  mr-2 h-6 w-6"
                      style={{ background: color }}
                    ></input>
                  ))}
                </div>
                <div className="flex ml-6 items-center">
                  <div className="relative"></div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-amber-800 tracking-wider">
                  <Rupees />
                  {price}
                </span>
                {console.log(cart)}
                {cart.some((cart) => cart.id === singleProduct.id) ? (
                  <button
                    onClick={() =>
                      dispatch({
                        type: DELETE_TO_CART,
                        payload: singleProduct.id,
                      })
                    }
                    className="flex ml-auto text-white bg-red border-0 py-2 px-6 focus:outline-none hover:bg-light-red rounded"
                  >
                    Delete Cart
                  </button>
                ) : (
                  <button
                    onClick={handleCart}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Add to Cart
                  </button>
                )}
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  {<WishList />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
