import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Introduction() {
  const textRef = useRef();

  useEffect(() => {
    // Word-by-word animation
    const words = textRef.current.querySelectorAll('span');
    
    words.forEach((word, i) => {
      gsap.fromTo(word,
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 0.3,
          scrollTrigger: {
            trigger: word,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          }
        }
      );
    });
  }, []);

  const text = "Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.";
  const words = text.split(' ');

  return (
    <div className="w-full flex flex-col md:flex-row justify-between p-4 md:p-7 items-center bg-[#EFF5E1] text-[#2D3B36]">
      <div className="text-justify w-full md:w-60 mt-4 md:mt-0 md:indent-16">
        <p ref={textRef}>
          {words.map((word, i) => (
            <span key={i} className="inline-block mr-1 opacity-30">{word}</span>
          ))}
        </p>
      </div>
      
      <div className="text-3xl md:text-6xl text-center md:text-right uppercase font-extrabold w-full md:w-60 tracking-normal leading-tight mt-6 md:mt-0">
        <h2>Glow Natur-ally</h2>
      </div>
      
      <div className="mt-6 md:mt-0 mx-auto md:mx-0">
        <img
          className="rounded-xl w-32 md:w-36"
          src="../../src/assets/skin_care_beauty_cosmetic_packaging_design.jpg"
          alt="Skincare product"
        />
      </div>
    </div>
  );
}

export default Introduction;
