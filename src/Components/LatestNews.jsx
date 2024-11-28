import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex p-3 mt-4 gap-2 bg-base-200">
      <p className="text-xl bg-[#D72050] px-3 py-1 ">Latest</p>
    <Marquee pauseOnHover={true} className="space-x-5">
          <Link to='/'> Lorem ipsum dolor sit amet.</Link>
          <Link to='/'> Lorem ipsum dolor sit amet.</Link>
          <Link to='/'> Lorem ipsum dolor sit amet.</Link>
          <Link to='/'> Lorem ipsum dolor sit amet.</Link>
    </Marquee>
    </div>
  );
};

export default LatestNews;
