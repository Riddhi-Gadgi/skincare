import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const loaderRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.5
    });
    tl.set(loaderRef.current, { display: 'none' });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div ref={loaderRef} className="fixed inset-0 bg-[#EFF5E1] z-50 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-[#2D3B36] tracking-widest">SKINCARE</h1>
      </div>
      
      <div className="page-content">
        <Navbar />
        <HeroSection />
        <Features />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;