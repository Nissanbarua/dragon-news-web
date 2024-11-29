import React from "react";
import { AiFillEye, AiFillStar } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className=" mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
      {/* Author Section */}
      <div className="flex items-center p-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h2 className="text-sm font-semibold">{news.author.name}</h2>
          <p className="text-xs text-gray-500">
            {new Date(news.author.published_date).toLocaleDateString()}
          </p>
        </div>
        <FaShareAlt className="ml-auto text-gray-500 cursor-pointer" />
      </div>

      {/* Content Section */}
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full object-cover p-2"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800">{news.title}</h1>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {news.details}
        </p>
        <button className="text-blue-500 font-medium mt-2">Read More</button>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <div className="flex items-center">
          <AiFillStar className="text-yellow-500" />
          <span className="ml-1 text-sm text-gray-700">
            {news.rating.number}
          </span>
        </div>
        <div className="flex items-center">
          <AiFillEye className="text-gray-500" />
          <span className="ml-1 text-sm text-gray-700">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
