import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";

const HomeLayout = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
      </header>
      <main></main>
    </div>
  );
};

export default HomeLayout;
