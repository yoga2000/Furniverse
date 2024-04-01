import React from "react";
import { links } from "../../helpers/utils";
import close from "../../assets/close.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";

const MobileMenu = ({ setMenuDiv, menuDiv }) => {
  return (
    <div className=" fixed z-50 bg-yellow top-0   left-0 h-full w-full">
      <div className="flex  p-4 items-center justify-between mx-auto sm:max-w-2xl md:3xl max-w-md ">
        <h1 className=" text-black font-[ubuntu]">FurniVerse</h1>
        <button onClick={() => setMenuDiv(!menuDiv)}>
          <img width={40} height={40} src={close} alt="close" />
        </button>
      </div>
      <ul className="p-4  cursor-pointer text text-black flex flex-col gap-4 m-4">
        {links.map((links) => {
          const { id, text, url } = links;
          return (
            <Link
              to={url}
              className="p-2 hover:pl-5 hover:bg-blue rounded-md duration-500 transition-all "
              key={id}
            >
              {text}
            </Link>
          );
        })}
      </ul>
      <Link
        to="/cart"
        className="  justify-center p-2  w-full text-2xl sm:text-3xl flex items-center gap-2"
      >
        Cart
        <img className="" src={cart} height={40} width={40} alt="cart img" />
      </Link>
    </div>
  );
};

export default MobileMenu;
