import React from "react";
import "../../src/App.css";
function Branding() {
  return (
    <>
      <div className="relative">
        <div
          className=" text-[233px] pt-42 -ml-3 mt-2  bg-[#EFF5E1] text-[#2D3B36] uppercase font-extrabold bg "
          style={{ zIndex: -1 }}
        >
          <h1>skincare</h1>
        </div>
        <div className="  absolute top-1 left-2/6 p-2  mx-2">
          <img
            className="rounded-2xl"
            src="../../src/assets/skin_model.png"
            width={"370px"}
            height={"385px"}
          />
        </div>
        <div className=" absolute top-36  left-1/14 w-30 h-9 rounded-full  bg-[#2D3B36] text-xs px-7 py-2.5  text-[#EFF5E1] font-extralight">
          <h3>Shop Now</h3>
        </div>
      </div>
      <div className="-mt-23 relative font-[400px] text-[2rem] text-[#2D3B36] leading-snug p-16 z-70 bg-[#FEFFF4] mb-10">
        Experience the ultimate in skincare with our expertly formulated
        products, crafted to nourish, protect, and rejuvenate your skin.
        Combining the finest natural ingredients with{" "}
        <span className="text-[#2D3B364D]">
          advanced science, our collection ensures every skin type can achieve a
          radiant, healthy glow. Embrace your beauty with confidence every day.
          Experience the ultimate in skincare with our expertly formulated
          products, crafted to nourish, protect, and rejuvenate your skin.
        </span>
      </div>
    </>
  );
}
export default Branding;
