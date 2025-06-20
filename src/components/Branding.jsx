import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Branding() {
  const textRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    if (!textRef.current) return;
    
    // Split text into words
    const text = textRef.current.textContent;
    textRef.current.innerHTML = text.split(' ').map(word => 
      `<span class="word" style="opacity:0.2">${word}</span>`
    ).join(' ');
    
    wordsRef.current = [...textRef.current.querySelectorAll('.word')];
    
    // Animation setup
    wordsRef.current.forEach((word, i) => {
      gsap.to(word, {
        opacity: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          onUpdate: self => {
            const progress = self.progress;
            const wordProgress = (i + 1) / wordsRef.current.length;
            if (progress > wordProgress * 0.8) {
              gsap.to(word, { opacity: 1, duration: 0.3 });
            }
          }
        }
      });
    });
  }, []);

  return (
    <>
      <div className="relative">
        <div className="text-[233px] pt-42 -ml-3 mt-2 bg-[#EFF5E1] text-[#2D3B36] uppercase font-extrabold" style={{ zIndex: -1 }}>
          <h1>skincare</h1>
        </div>
        <div className="absolute top-1 left-2/6 p-2 mx-2">
          <img
            className="rounded-2xl"
            src="./assets/skin_model.png"
            width={"370px"}
            height={"385px"}
            alt="Skincare model"
          />
        </div>
        <div className="absolute top-36 left-1/14 w-30 h-9 rounded-full bg-[#2D3B36] text-xs px-7 py-2.5 text-[#EFF5E1] font-extralight">
          <h3>Shop Now</h3>
        </div>
      </div>
      
      {/* Animated text paragraph */}
      <div 
        ref={textRef}
        className="-mt-23 relative font-[400px] text-[2rem] text-[#2D3B36] leading-snug p-16 z-70 bg-[#FEFFF4] mb-10"
      >
        Experience the ultimate in skincare with our expertly formulated
        products, crafted to nourish, protect, and rejuvenate your skin.
        Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a
        radiant, healthy glow. Embrace your beauty with confidence every day.
        Experience the ultimate in skincare with our expertly formulated
        products, crafted to nourish, protect, and rejuvenate your skin.
      </div>
    </>
  );
}

export default Branding;