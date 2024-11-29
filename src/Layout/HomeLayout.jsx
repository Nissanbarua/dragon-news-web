import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftSideBar from "../Components/LayoutComponents/LeftSideBar";
import RightSideBar from "../Components/LayoutComponents/RightSideBar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <section className="items-center">
          <Navbar></Navbar>
        </section>
      </header>
      <main className="mt-10 grid md:grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LeftSideBar></LeftSideBar>{" "}
        </aside>
        <section className="col-span-6"><Outlet></Outlet> </section>
        <aside className="col-span-3">
          <RightSideBar></RightSideBar>{" "}
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
