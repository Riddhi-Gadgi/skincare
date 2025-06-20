import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <FAQ />
      <Footer />
    </>
  );
}
export default LandingPage;
