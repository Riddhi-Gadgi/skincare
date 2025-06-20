import React from "react";
import "../../src/App.css";
import Cart from "./Cart.jsx";

function FeelBeauty() {
  const products = [
    {
      name: "ALYA SKIN CLEANSER",
      price: "FROM $29.99",
      image: "/assets/p1.jpg",
    },
    {
      name: "RITUAL OF SAKURA.",
      price: "FROM $27.99",
      image: "/assets/p2.jpg",
    },
    {
      name: "THE BODY LOTION.",
      price: "FROM $19.99",
      image: "/assets/p3.jpg",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center p-6 rounded-lg   mt-18  w-full">
        <div className="relative w-[1028px] h-[660px] rounded-xl overflow-hidden ">
          <img
            src="/assets/cream.png"
            className="w-full h-full object-cover"
            alt="Product"
          />

          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#293330] to-[#00000000] opacity-80"></div>

          <div className="absolute bottom-10 left-1/5 w-160 text-center px-4">
            <h3 className="text-[#FEFFF4] text-5xl mb-4">
              Feel Beautiful Inside and Out with Every Product.
            </h3>
            <div className="mx-auto my-8 w-fit px-6 py-2 rounded-full bg-[#FEFFF4] text-sm text-[#2D3B36]">
              Shop Now
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div>
          <h3 className="text-[#2D3B36] text-4xl text-center mb-6 max-w-115 mx-auto">
            Feel Beautiful Inside and Out with Every Product.
          </h3>
        </div>
        <div className="flex flex-wrap gap-4 justify-center uppercase text-xs font-med">
          {[
            { label: "New Arrival", active: true },
            { label: "Cleansing", active: false },
            { label: "Acne Fighter", active: false },
            { label: "Anti Aging", active: false },
          ].map(({ label, active }, i) => (
            <div
              key={i}
              className={`px-4 py-2.5 rounded-full min-w-fit text-center h-9 border border-[#2D3B36] ${
                active
                  ? "bg-[#2D3B36] text-[#FEFFF4]"
                  : "bg-[#FEFFF4] text-[#2D3B36]"
              }`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="   relative flex justify-around mx-10 -top-10">
        {products.map((product, index) => {
          return (
            <div key={index} className="p-2 rounded-lg  ">
              <img
                src={product.image}
                alt={product.name}
                className=" w-142 h-109 object-cover  rounded-xl"
              />
              <div className="absolute bottom-5 mx-5 bg-[#FEFFF4]  w-75 text-xs text-[#2D3B36] flex p-1 justify-between rounded-md">
                <span className="p-1">
                  <h2 className=" uppercase my-2">{product.name}</h2>
                  <span className="mt-3 text-[10px] text-[#2D3B3680] ">
                    {product.price}
                  </span>
                </span>
                <span className="p-2">
                  <Cart />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default FeelBeauty;
