import React from "react";
import Circle from "./stayCategoryNavComp/Circle";
import img1 from "../Images/Untitled design (2).png";
import img2 from "../Images/Untitled design (3).png";
import img3 from "../Images/Untitled design (4).png";
import img4 from "../Images/Untitled design (5).png";
import "./StayCategoryNav.css";
const StayCategoryNav = () => {
  return (
    <div className="stay-category-nav-container">
      <div className="stay-category-nav-section">
        <Circle image={img1} text={"Cruize"} />
        <Circle image={img2} text={"Tent"} />
        <Circle image={img3} text={"Tree House"} />
        <Circle image={img4} text={"Home Stay"} />
      </div>
    </div>
  );
};

export default StayCategoryNav;
