import React from "react";
import "../styles/Section1.css";
import laptop from "../Images/fly-1.png";
import light from "../Images/idea.png"

const Section1 = () => {
  return (
    <div className="sec1body">
      <h1>
        <b>Better Future for your Kids</b>
      </h1>
      <div className="ptags">
        <p>
          This year Children’s day, we are getting children in Lagos into tech
          again! Let your kids be taught coding and graphics design. This is for
          kids in Lagos between ages 6 to 13 years.{" "}
          <span style={{ color: "#FF7402" }}>ADMISSION IS FREE.</span>
        </p>
      </div>
      <div className="reg">
        <div className="regist">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZLMEy5dTtW0yss1mTOJpZ8-5fwIK2klxiDoQhWl8raq085A/viewform?usp=pp_url">
            <button>Register for Individual</button>
          </a>
          {/* <button >Register</button> */}
        </div>
        <div className="regist2">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfd4Sc4AYfU72s9MYxTPvXrni08Mz5ROiL2ZmaHvYF0QEumMw/viewform?usp=pp_url">
            <button>Register for School</button>
          </a>
          {/* <button >Register</button> */}
        </div>
      </div>
      <div className="laptop">
        <img src={laptop} alt="" />
      </div>
      <div className="light">
        <img src={light} alt="" />
      </div>
    </div>
  );
};

export default Section1;
