import React from "react";

import Introduction from "./Introduction";
import Branding from "./Branding";

function HeroSection() {
  return (
    <>
      <div className="bg-[#EFF5E1] w-full h-screen ">
        <Introduction />
        <Branding />
      </div>
    </>
  );
}
export default HeroSection;
