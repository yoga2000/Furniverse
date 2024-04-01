import React from "react";
import { useFilterContext } from "../Context/FilerContext";
import { CATEGORY, CLEAR_FILTER, SORT_BY_PRICE } from "../Context/actions";
import { useProduct } from "../Context/ProductContext";

const SideBar = () => {
  const { category, filterDispatch } = useFilterContext();
  const { products } = useProduct();
  {
    console.log(category);
  }
  return (
    <div className="hidden top-0 pt-4 space-y-4 lg:block sticky">
      <div>
        <label
          htmlFor="SortBy"
          className="block text-xs font-medium text-gray-700"
        >
          {" "}
          Sort By{" "}
        </label>

        <select
          onChange={(e) => {
            filterDispatch({ type: SORT_BY_PRICE, payload: e.target.value });
          }}
          className="mt-1 rounded border-gray-300 text-sm"
        >
          <option>Sort By</option>
          <option value="low to high">Low to High</option>
          <option value="high to low">High to low</option>
        </select>
      </div>
      <div className="flex flex-col justify-start items-start  capitalize">
        <h2 className="text">Category</h2>
        <input
          type="button"
          onClick={(e) =>
            filterDispatch({ type: CATEGORY, payload: e.target.value })
          }
          className=" text-base hover:underline transition-all duration-1000 border-red text p-2 px-4 capitalize rounded-md cursor-pointer"
          value="all"
        />
        <input
          type="button"
          onClick={(e) =>
            filterDispatch({ type: CATEGORY, payload: e.target.value })
          }
          className="text-base hover:underline p-2 px-4 capitalize transition duration-1000 rounded-md cursor-pointer"
          value="living room"
        />
        <input
          type="button"
          onClick={(e) =>
            filterDispatch({ type: CATEGORY, payload: e.target.value })
          }
          className="text-base hover:underline  p-2 px-4 capitalize transition-all duration-200 rounded-md cursor-pointer "
          value="bedroom"
        />
        <input
          type="button"
          onClick={(e) =>
            filterDispatch({ type: CATEGORY, payload: e.target.value })
          }
          className="text-base hover:underline p-2 px-4 capitalize transition-all duration-200 rounded-md cursor-pointer"
          value="kitchen"
        />
        <input
          type="button"
          onClick={(e) =>
            filterDispatch({ type: CATEGORY, payload: e.target.value })
          }
          className="text-base hover:underline p-2 px-4 capitalize transition-all duration-200 rounded-md cursor-pointer"
          value="office"
        />
        <input
          type="button"
          onClick={(e) =>
            filterDispatch({ type: CATEGORY, payload: e.target.value })
          }
          className="text-base hover:underline p-2 px-4 capitalize transition-all duration-200 rounded-md cursor-pointer"
          value="dining"
        />
        <input
          type="button"
          onClick={(e) =>
            filterDispatch({ type: CATEGORY, payload: e.target.value })
          }
          className="text-base hover:underline p-2 px-4 capitalize transition-all duration-200 rounded-md cursor-pointer"
          value="kids"
        />
      </div>
      <button
        onClick={() => filterDispatch({ type: CLEAR_FILTER })}
        className="bg-red px-4 hover:bg-light-red text-base py-2 rounded"
      >
        Clear filter
      </button>
    </div>
  );
};

export default SideBar;
