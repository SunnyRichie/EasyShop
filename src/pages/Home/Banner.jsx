import React from "react";
import Categories from "../../banner/Categories";
import SliderHome from "../../banner/Slider";

import "../../banner/Home.css";


 // Import Categories component

const Banner = () => {
  return (
    <div className="banner-section mt-0">
      <div className="container1 d-flex justify-content-between">
        {/* Render Categories and Slider */}
        <Categories />
    
        <SliderHome />
      </div>
    </div>
  );
};

export default Banner;
