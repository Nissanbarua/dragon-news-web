import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-3">
      <h2 className="text-xl font-semibold">Find Us On</h2>
      <div className="join join-vertical *:w-full flex outline outline-[#E7E7E7] mt-2  ">
        <button className="btn join-item justify-start outline outline-[#E7E7E7] text-[#706F6F]">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start outline outline-[#E7E7E7] text-[#706F6F] ">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn join-item justify-start outline outline-[#E7E7E7] text-[#706F6F] ">
          <FaInstagram ></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
