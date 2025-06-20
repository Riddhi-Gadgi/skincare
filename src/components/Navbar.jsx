import React from "react";
import ShoppingBagIcon from "./ShoppingBagIcon";
import HeartIcon from "./HeartIcon";
import PersonIcon from "./PersonIcon";

function Navbar() {
  return (
    <nav
      className="top-0 text-xs font-medium
 flex w-full justify-between px-6 py-3.5 items-center gap-5  bg-[#EFF5E1] text-[#2D3B36] tracking-tight
 "
    >
      <div className="text-xl px-6 text-[#2D3B36] uppercase font-extrabold ">
        <h1>skincare</h1>
      </div>
      <div className="flex gap-9 text-[#2D3B36] ml-16">
        <p>All Products</p>
        <p>Serum</p>
        <p>Sunscreen</p>
        <p>Bundle</p>
      </div>
      <div className="flex gap-2 justify-baseline px-4 py-3 mx-2">
        <div className="flex justify-baseline">
          <div className="p-1 bg-[#F8FEE5] rounded-full w-7 h-7 flex items-center justify-center">
            <ShoppingBagIcon />
          </div>
          <span className=" p-2 text-[#2D3B36]">
            <h4>Cart (1)</h4>
          </span>
        </div>

        <div className="p-1 bg-[#F8FEE5] rounded-full w-7 h-7 flex items-center justify-center">
          <HeartIcon />
        </div>
        <div className="p-1 bg-[#F8FEE5] rounded-full w-7 h-7 flex items-center justify-center">
          <PersonIcon />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
