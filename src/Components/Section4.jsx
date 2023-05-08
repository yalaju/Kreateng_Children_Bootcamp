import React from "react";
import "../styles/Section4.css";
import img1 from "../Images/Rectangle 84.png";
import img2 from "../Images/Rectangle 85.png";
import img3 from "../Images/testimg.png";

const Section4 = () => {
  return (
    <div className="sec4body">
      <h1>
        <b>TESTIMONIALS</b>
      </h1>
      <div className="ptags4">
        <p>
          Images of previously held bootcamp, children who attended with their
          instructors{" "}
        </p>
      </div>
      <div className="pics">
        {/* <div> */}
        <img src={img1} alt="" width="100%" />
        {/* </div>
        <div> */}
        <img src={img2} alt="" width="100%" />
        {/* </div>
        <div> */}
        <img src={img3} alt="" width="100%" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Section4;
