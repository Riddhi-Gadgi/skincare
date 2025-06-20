import React from "react";
import "../../src/App.css";
import AboutProduct from "./AboutProduct";
import BestProducts from "./BestProducts";
import FeelBeauty from "./FeelBeauty";
function Features() {
  return (
    <>
      <div className="relative top-100 bg-[#FEFFF4]">
        <AboutProduct />
        <BestProducts />
        <FeelBeauty />
      </div>
    </>
  );
}
export default Features;
