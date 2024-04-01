import React, { useState } from "react";
import cart_png from "../assets/cart.png";
import { links } from "../helpers/utils";
import menu from "../assets/menu.png";
import MobileMenu from "./ui/MobileMenu";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const Nav = () => {
  const [menuDiv, setMenuDiv] = useState(false);
  const { cart } = useCartContext();
  return (
    <div className="h-[5rem] shadow-md bg-grey text ">
      <div className="flex items-center text-black lg:justify-evenly mx-auto lg:max-w-6xl sm:max-w-2xl md:3xl max-w-md  border-black justify-between p-4">
        <h1 className=" font-[ubuntu]">FurniVerse</h1>
        <ul className="hidden mx-auto border-black lg:flex w-1/3 justify-evenly cursor-pointer">
          {links.map((links) => {
            const { id, text, url } = links;
            return (
              <Link
                className="hover:underline transition duration-1000"
                to={url}
                id={id}
              >
                {text}
              </Link>
            );
          })}
        </ul>

        <Link to="/cart" className=" hidden lg:block relative">
          <button className="flex gap-x-2 items-center  border-0 py-2 px-6 focus:outline-none rounded">
            <span> Cart</span>
            <img src={cart_png} width={40} alt="" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 text-center bg-lime-500 text-slate-950 rounded-full px-2 text-xl">
                {cart.length}
              </span>
            )}
          </button>
        </Link>

        {/* hamburger menu */}
        <button onClick={() => setMenuDiv(!menuDiv)} className="lg:hidden">
          <img width={40} height={40} src={menu} alt="menu" />
        </button>
      </div>
      {/* mobile links */}
      {menuDiv && <MobileMenu menuDiv={menuDiv} setMenuDiv={setMenuDiv} />}
    </div>
  );
};

export default Nav;
