import React, { useRef, useState } from "react";
import TourCard from "./TourCard";
import TourPackageCard from "./TourPackageCard";
import { GoArrowRight } from "react-icons/go";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";
import "./TourPackages.css";
import PackagesData from './PackagesData'
const TourPackages = () => {
  const [showIcons, setShowIcons] = useState(false);
  const containerRef = useRef(null);
 

  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 910;
  };

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 910;
  };

  return (
    <div
      className="flex justify-center  w-full"
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
    >
      <div
        style={{
          maxWidth: window.innerWidth > 560 ? "1500px" : "100%",
        }}
        className="flex justify-center"
      >
        <div
          style={{
            maxWidth: window.innerWidth < 560 ? "0px" : "",
          }}
          onClick={handleScrollLeft}
          className={`relative flex items-center left-0 text-3xl h-100 cursor-pointer arrow-icon left-hover-scroller `}
        >
          <RiArrowLeftCircleLine
            className={` ${showIcons ? "" : "text-white"}`}
            style={{ fontSize: "4vw", opacity: 0.5 }}
          />
        </div>
        <div
          style={{
            maxWidth: window.innerWidth > 560 ? "1220px" : "100%",
          }}
          className="h-full p-2 pb-5 flex overflow-x-scroll no-scrollbar gap-4 scroll-container"
          ref={containerRef}
        >
          {PackagesData.map((pkg, index) => (
            <TourPackageCard key={index} {...pkg} />
          ))}
        </div>
        <div
          style={{
            maxWidth: window.innerWidth < 560 ? "0px" : "",
          }}
          onClick={handleScrollRight}
          className={`relative flex items-center right-0 text-3xl h-100 cursor-pointer arrow-icon right-hover-scroller `}
        >
          <RiArrowRightCircleLine
            className={` ${showIcons ? "" : "text-white"}`}
            style={{ fontSize: "4vw", opacity: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
