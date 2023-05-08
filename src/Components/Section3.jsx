import React from 'react'
import "../styles/Section3.css"
// import "../Images/child-sec3img1.png"
import img1 from "../Images/child-sec3img1.png"
import img2 from "../Images/child-sec3img2.png"
import "../Images/child-sec3img2.png"


const Section3 = () => {
  return (
    <div className="bodysec3">
      <div className="sec3body">
        <div className="pro1">
          <h2>Programs</h2>
          <p>
            Our Programs is designed to help develop your children learn basics
            of graphic design and web development
          </p>
        </div>
        <div className="idontknow">
          <div className="img1">
            <img src={img2} alt="" />
            <h4>Graphics Design</h4>
            <p>
              Create a visually appealing design for your business to attract
              clients to the business.
            </p>
          </div>
          <div className="img2">
            <img src={img1} alt="" width="100%" />
            <h4>Web development </h4>
            <p>
              Create an app for business for a more professional business
              performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3