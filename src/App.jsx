import { useRef, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Updated import
import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";


function App() {
  const loaderRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const animatePageLoad = () => {
      // Reset states
      gsap.set(loaderRef.current, {
        display: "flex",
        opacity: 1,
      });
      gsap.set(contentRef.current, {
        opacity: 0,
        y: 30,
      });

      // Run animation timeline
      const tl = gsap.timeline();
      tl.to(loaderRef.current, { opacity: 0, duration: 0.8, delay: 0.5 })
        .set(loaderRef.current, { display: "none" })
        .to(contentRef.current, { opacity: 1, y: 0, duration: 1.2 });
    };

    // Animate on initial load
    animatePageLoad();

    // For route changes, we'll use a different approach in v6
    // This will now trigger on every navigation
    const unlisten = () => {
      window.addEventListener("popstate", animatePageLoad);
      return () => window.removeEventListener("popstate", animatePageLoad);
    };

    return unlisten();
  }, []);

  return (
    <Router>
      {" "}
      {/* No history prop needed in v6+ */}
      {/* Loading screen */}
      <div
        ref={loaderRef}
        className="fixed inset-0 bg-[#EFF5E1] z-50 flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold text-[#2D3B36] tracking-widest">
          SKINCARE
        </h1>
      </div>
      {/* Main content */}
      <div ref={contentRef} className="page-content opacity-0">
        <Navbar />
        <HeroSection />
        <Features />
       
        <FAQ />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
