import React, { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { DECREMENT, INCREMENT } from "../Context/actions";

const CartButton = ({ id }) => {
  const { dispatch } = useCartContext();
  const [val, setVal] = useState(1);
  const increment = () => {
    setVal((prev) => prev + 1);
  };

  const decrement = () => {
    setVal((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <div>
      <label for="Quantity" class="sr-only">
        {" "}
        Quantity{" "}
      </label>

      <div class="flex items-center justify-center rounded border border-gray-200">
        <button
          onClick={() => {
            dispatch({ type: DECREMENT, payload: id });
            decrement();
          }}
          type="button"
          class="text-lg px-2 sm:text-2xl  leading-10 text-gray-600 transition hover:opacity-75"
        >
          &minus;
        </button>

        <input
          type="number"
          id="Quantity"
          value={val}
          class="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />

        <button
          onClick={() => {
            dispatch({ type: INCREMENT, payload: id });
            increment();
          }}
          type="button"
          class=" px-2 text-lg sm:text-2xl leading-10 text-gray-600 transition hover:opacity-75"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartButton;
