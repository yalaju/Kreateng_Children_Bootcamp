import React from "react";
import "../styles/Section5.css";
import phone from "../Images/phon-kre.png";
import mail from "../Images/mail-kre.png";
import logo2 from "../Images/kre-Logo.png";
import face from "../Images/facebook.png";
import twe from "../Images/twitter.png";
import insta from "../Images/instagram.png";

const Section5 = () => {
  return (
    <div className="sec5-body">
      <div className="sec5-in">
        <div className="forimg">
          <img src={logo2} alt="" />
        </div>
        {/* <div className="subj">
          <p style={{ fontSize: "30px" }}>
            <b>About Us</b>
          </p>
          <p style={{ fontSize: "25px" }}>Courses</p>
          <p style={{ fontSize: "25px" }}>Instructors</p>
        </div> */}
        <div className="info">
          <p style={{ fontSize: "30px" }}>
            <b>About Us</b>
          </p>
          <p style={{ fontSize: "18px" }}>
            4B, Oshineye Street
            <br />
            Shomolu, Lagos
          </p>
          <p style={{ fontSize: "20px", color: "#FF7402" }}>
            <img src={phone} alt="" width="20px" /> +2347036228504
          </p>
          <p style={{ fontSize: "20px", color: "#FF7402" }}>
            <img src={mail} alt="" width="20px" /> Kreatenga@gmail.com
          </p>
        </div>
        <div className="icon">
          <div className="hove">
            {" "}
            <a href="https://www.facebook.com/kreatengafrica">
              <img src={face} alt="" />
            </a>
          </div>
          <div className="hove">
            <a href="http://Twitter.com/kreatengafrica">
              <img src={twe} alt="" />
            </a>
          </div>
          <div className="hove">
            <a href="https://instagram.com/kreatengafrica?igshid=NTc4MTIwNjQ2YQ==">
              <img src={insta} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
