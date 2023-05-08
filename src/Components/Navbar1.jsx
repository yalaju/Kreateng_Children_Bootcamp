import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Nav, Navbar,NavDropdown } from "react-bootstrap";
import "../styles/Navbar1.css";
import logo from "../Images/kre-Logo.png"

const Navbar1 = () => {
  return (
    <div className="navbodyall">
      <Navbar className="navbar1" expand="lg">
        <Container>
          <div className="logocont">
            <Navbar.Brand href="#home" className="logo">
              {/* <a> */}
              <img src={logo} alt="" width="90%" />
              
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="hand" /> */}
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="me-auto">
              <a href="#home" className="nav1">
                {" "}
                <b>Home</b>{" "}
              </a>

              <a href="#about" className="nav2">
                {" "}
                About Us{" "}
              </a>

              <a href="#skills" className="nav3">
                {" "}
                Courses{" "}
              </a>
              <a href="#project" className="nav4">
                {" "}
                Instructors{" "}
              </a>

              <a href="#contact" className="nav5">
                {" "}
                Contact{" "}
              </a>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
