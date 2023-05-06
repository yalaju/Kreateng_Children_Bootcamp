import React from "react";
import "../styles/Section2.css";
import dash from "../Images/dash.png";
import boy from "../Images/babyboy.png";
import girl from "../Images/babygirl.png"
import p1 from "../Images/person1.png"
import p2 from "../Images/person2.png"
import jet from "../Images/rocket.png"
import fly from "../Images/design 1.png"
import comp from "../Images/graphic-design 1.png"
import mid from "../Images/logo 2.png"



const Section2 = () => {
  return (
    <div className="sec2">
      <div className="sec2flex">
        <div className="sec2flexin">
          <p style={{ display: "flex" }}>
            <img
              src={dash}
              alt=""
              height="10%"
              style={{ paddingTop: "50px", paddingRight: "10px" }}
            />
            <div>
              We don’t just give our students only lecture but real life
              experiment workshops filled experience throughout!
            </div>
          </p>
        </div>
        <div>
          <img src={boy} alt="" />
        </div>
      </div>
      <div className="sec2flex2">
        <div>
          <img src={girl} alt="" />
        </div>
        <div className="sec2flexin2">
          <p style={{ display: "flex" }}>
            <img
              src={p1}
              alt=""
              height="10%"
              style={{ paddingTop: "30px", paddingRight: "15px" }}
            />
            <div>
              <h1 style={{ fontSize: "50px" }}>
                <b>80</b>
              </h1>
              Total students who have taken the courses
            </div>
          </p>
          <p style={{ display: "flex" }}>
            <img
              src={p2}
              alt=""
              height="10%"
              style={{ paddingTop: "30px", paddingRight: "15px" }}
            />
            <div>
              <h1 style={{ fontSize: "50px" }}>
                <b>50</b>
              </h1>
              Total available space for the program
            </div>
          </p>
        </div>
      </div>
      <div className="jet11">
        <img src={jet} alt="" />
      </div>

      <div className="jet2">
        <img src={fly} alt="" />
      </div>



      <div className="jet3">
        <img src={comp} alt="" />
      </div>

      <div className="jet4">
        <img src={mid} alt="" />
      </div>
    </div>
  );
};

export default Section2;
