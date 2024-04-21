import React, { useState } from 'react';
import '../StayCategoryNav.css'; 

const Circle = ({image, text ,background}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="circle-container">
      <div
       style={background}
        className={`circle ${hovered ? 'hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={image} alt="" className="boat">
            
        </img>
        <div className="letter">{text}</div>
      </div>
    </div>
  );
};

export default Circle;
