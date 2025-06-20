import React from "react";
import "../../src/App.css";

function Footer() {
  return (
    <>
      <div className="relative text-xs flex h-115 w-full justify-between py-18  bg-[#2D3B36] text-[#2D3B36] font-light overflow-hidden">
        <div className=" mx-12">
          <h3 className="text-[#FEFFF4] text-4xl mb-4 w-100">
            Join The Skincare Community Now.
          </h3>
          <div className="flex text-[#FEFFF4] text-xs mb-8 w-100 py-18 gap-8 justify-betwwen">
            <h3>Facebook</h3>
            <h3>Instagram</h3>
            <h3>Youtube</h3>
          </div>
        </div>
        <div className=" mx-12">
          <h3 className="text-[#FEFFF4] text-xl mb-4 w-100">Get in Touch</h3>
          <h3 className="text-[#FEFFF4] text-4xl mb-4 w-100">
            contact.skincare.com
          </h3>
          <div className="flex text-[#FEFFF4] text-xs mb-8 w-100 py-18 gap-8 justify-betwwen">
            <h3>Terms of Service</h3>
            <h3>Privacy Policy</h3>
            <h3>Cookies Policy</h3>
          </div>
        </div>
        <div className="absolute top-67 text-[233px] text-[#3D4B4680] uppercase font-extrabold overflow-hidden">
          <h1>skincare</h1>
        </div>
      </div>
    </>
  );
}
export default Footer;
