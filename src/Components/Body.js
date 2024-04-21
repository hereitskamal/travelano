import React from "react";
import "./Body.css";
import InstaPost from "./Body/InstaPost";
import Navbar from "./Navbar";
import TourPackages from "./Body/TourPackages";
import Footer from "./Body/Footer";
import HomePageBanner from "./Body/Globle/HomePageBanner";
import GroupEvent from "./GroupEvent";
import TourSelector from "./TourSelector";

const Body = () => {
  return (
    <>
      <Navbar />
      <div className="body-container w-full">
        {window.innerWidth < 560 && <TourSelector/>}
        <br />
        <hr className="line" />
        <div className="flex " style={{ flexWrap: "wrap" }}>
          <TourPackages />
        </div>
        <HomePageBanner/>
        <GroupEvent/>
        {/* <InstaPost /> */}
      </div>
      <Footer />
    </>
  );
};

export default Body;
