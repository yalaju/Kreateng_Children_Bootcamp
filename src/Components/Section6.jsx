import React from "react";
import "../styles/Section6.css";
import time from "../Images/Timeimg.png";
import cale from "../Images/calimg.png";
import loca from "../Images/Locationimg.png";
import time2 from "../Images/greenclocl.png"
import cale2 from "../Images/greencall.png"
import loca2 from "../Images/greenlocation.png"
import jet from "../Images/rocket.png"
import fly from "../Images/design 1.png"

const Section6 = () => {
  return (
    <div className="sec6location">
      <div className="sec6flex">
        <div className="sec6flexin">
          <h1>
            <b>Day 1</b>
          </h1>
          <div className="init">
            <img src={time2} alt="" />
            <h4>10am - 12pm</h4>
          </div>
          <div className="init">
            <img src={cale2} alt="" />
            <h4>26 May, 2023</h4>
          </div>
          <div className="init">
            <img src={loca2} alt="" height={"6%"} />
            <h4>
              Kreateng HQ, 4B, Oshineye <br /> street, Pedro, Lagos.
            </h4>
          </div>
        </div>
        <div className="sec6flexin2">
          <h1>
            <b>Day 2</b>
          </h1>
          <div className="init2">
            <img src={time} alt="" />
            <h4>10am - 2pm</h4>
          </div>
          <div className="init2">
            <img src={cale} alt="" />
            <h4>27 May, 2023</h4>
          </div>
          <div className="init2">
            <img src={loca} alt="" height={"6%"} />
            <h4>
              Kreateng HQ, 4B, Oshineye <br /> street, Pedro, Lagos.
            </h4>
          </div>
        </div>
      </div>
      <div className="img111">
        <img src={jet} alt="" />
      </div>
      <div className="img222">
        <img src={fly} alt="" />
      </div>
    </div>
  );
};

export default Section6;
