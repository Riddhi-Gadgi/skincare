import React from "react";
import "../../src/App.css";
function Introduction() {
  return (
    <>
      <div
        className="top-0 text-xs font-medium
 flex w-full  justify-between p-7 items-center    bg-[#EFF5E1] text-[#2D3B36] "
      >
        <div className=" text-[#2D3B36] p-3 break-normal text-justify w-60 indent-16 mt-2 ">
          <p>
            Transform your skincare routine with premium products that restore,
            protect, and enhance your nautural glow every day.
          </p>
        </div>
        <div className="text-6xl mr-16 text-[#2D3B36] uppercase font-extrabold w-60  tracking-normal leading-14">
          <h2>Glow Natur-ally</h2>
        </div>
        <div className="p-2 mt-6 mx-6">
          <img
            className="rounded-xl "
            src="./assets/skin_care_beauty_cosmetic_packaging_design.jpg"
            width={"142px"}
            height={"140px"}
          />
        </div>
      </div>
    </>
  );
}
export default Introduction;