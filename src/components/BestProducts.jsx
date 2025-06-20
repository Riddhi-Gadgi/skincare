import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Right from "./Right.jsx";
import Left from "./Left.jsx";
import Cart from "./Cart.jsx";

function BestProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();
  const prevButtonRef = useRef();
  const nextButtonRef = useRef();

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
    { name: "THE BODY LOTION.", price: "FROM $19.99", image: "/assets/p3.jpg" },
    {
      name: "NIGHT REPAIR SERUM",
      price: "FROM $34.99",
      image: "/assets/p4.jpg",
    },
  ];

  // Button animation function
  const animateButton = (buttonRef, direction) => {
    gsap.to(buttonRef.current, {
      scale: 0.9,
      duration: 0.1,
      onComplete: () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "elastic.out(1, 0.5)",
        });
      },
    });

    // Slide animation
    if (direction === "next") nextSlide();
    else prevSlide();
  };

  const slideProducts = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth / products.length;
      gsap.to(sliderRef.current, {
        scrollLeft: currentSlide * slideWidth,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < products.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : products.length - 1));
  };

  useEffect(slideProducts, [currentSlide]);

  return (
    <div className="bg-[#FEFFF4] py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-12">
        <div className="flex items-center gap-2 w-46 h-9 rounded-full border border-[#2D3B36] px-4 py-2.5">
          <span className="bg-[#2D3B36] w-3 h-3 rounded-full"></span>
          <h3 className="text-xs">Best Selling Products</h3>
        </div>

        <h3 className="text-2xl md:text-4xl text-[#2D3B36] text-center max-w-xl">
          Skincare That Brings Out Your Natural Radiance
        </h3>

        <div className="hidden md:flex gap-8">
          <button
            ref={prevButtonRef}
            onClick={() => animateButton(prevButtonRef, "prev")}
            className="interactive-btn"
            aria-label="Previous products"
          >
            <Left />
          </button>
          <button
            ref={nextButtonRef}
            onClick={() => animateButton(nextButtonRef, "next")}
            className="interactive-btn"
            aria-label="Next products"
          >
            <Right />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Slider */}
      <div
        ref={sliderRef}
        className="md:hidden flex overflow-x-hidden snap-x snap-mandatory mt-8 scrollbar-hide"
      >
        {products.map((product, index) => (
          <div key={index} className="min-w-full snap-center px-4 py-6">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FEFFF4] text-xs text-[#2D3B36] flex p-3 justify-between rounded-md">
                <div>
                  <h2 className="uppercase my-1 font-bold">{product.name}</h2>
                  <span className="text-[10px] text-[#2D3B3680]">
                    {product.price}
                  </span>
                </div>
                <button
                  className="cart-btn"
                  onClick={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 0.8,
                      duration: 0.1,
                      onComplete: () => {
                        gsap.to(e.currentTarget, {
                          scale: 1,
                          duration: 0.3,
                          ease: "elastic.out(1, 0.5)",
                        });
                      },
                    });
                  }}
                >
                  <Cart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 px-12">
        {products.slice(0, 3).map((product, index) => (
          <div key={index} className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#FEFFF4] text-xs text-[#2D3B36] flex p-3 justify-between rounded-md">
              <div>
                <h2 className="uppercase my-1 font-bold">{product.name}</h2>
                <span className="text-[10px] text-[#2D3B3680]">
                  {product.price}
                </span>
              </div>
              <button className="cart-btn">
                <Cart />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Controls */}
      <div className="md:hidden flex justify-center gap-8 mt-6">
        <button
          ref={prevButtonRef}
          onClick={() => animateButton(prevButtonRef, "prev")}
          className="interactive-btn"
          aria-label="Previous products"
        >
          <Left />
        </button>
        <button
          ref={nextButtonRef}
          onClick={() => animateButton(nextButtonRef, "next")}
          className="interactive-btn"
          aria-label="Next products"
        >
          <Right />
        </button>
      </div>
    </div>
  );
}

export default BestProducts;
