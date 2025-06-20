
import React from "react";
import "../../src/App.css";

function AboutProduct() {
  return (
    <>
      <div className="flex pt-24 bg-[#FEFFF4] justify-around">
        <div className=" p-8 text-[#2D3B36]  pt-16">
          <div className="bg-transparent  flex gap-2 w-40 h-9 rounded-full border-1  border-[#2D3B36]  px-4 py-2.5  text-[#2D3B36] ">
            <span className="bg-[#2D3B36] w-3 h-3 rounded-full "></span>
            <h3 className="text-xs ">Why Our Products</h3>
          </div>
          <div>
            <h3 className="p-1 mt-7 uppercase text-4xl w-100 leading-snug">
              YOUR SKIN DESERVES THE BEST CARE.
            </h3>
            <h3 className="p-2 my-4 text-xs w-110 ">
              Discover a curated collection of skincare products designed to
              rejuvenate, protect, and pamper your skin. Explore our rage
              crafted with love backed by science, and inspired by nature.
            </h3>
          </div>
          <div>
            <div className=" w-115 flex gap-5">
              <h2 className="text-4xl h-15 p-2 bg-gradient-to-b from-[#293330] to-[#FEFFF4] text-transparent bg-clip-text">
                01
              </h2>
              <div>
                <h3 className="text-4xl p-2 ">Bio Ingredients</h3>
                <p className="text-xs p-2 mb-6 w-80">
                  Get naturally beautiful and transform with our bio ingredients
                  creams for healthy, radiant skin.
                </p>
              </div>
            </div>
            <div className=" w-115 flex gap-4">
              <h2 className="text-4xl h-15 p-2 bg-gradient-to-b from-[#293330] to-[#FEFFF4] text-transparent bg-clip-text">
                02
              </h2>
              <div>
                <h3 className="text-4xl p-2 ">Everything Natural</h3>
                <p className="text-xs p-2 mb-6 w-80">
                  Pure ingredients for pure skin. The Perfect solution for your
                  skin care needs.
                </p>
              </div>
            </div>
            <div className=" w-115 flex gap-4">
              <h2 className="text-4xl h-15 p-2 bg-gradient-to-b from-[#293330] to-[#FEFFF4] text-transparent bg-clip-text">
                03
              </h2>
              <div>
                <h3 className="text-4xl p-2 ">All Handmade</h3>
                <p className="text-xs p-2 mb-6 w-80">
                  Made with love and care. Just for you. Give your skin the
                  tender loving care it deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-16">
          <img
            className="rounded-2xl "
            src="./assets/skin_model.png"
            width={"559px"}
            height={"801px"}
          />
          <div className="p-2 text-xs flex flex-row justify-between">
            <p>Since 2001</p>
            <p>Learn More</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutProduct;