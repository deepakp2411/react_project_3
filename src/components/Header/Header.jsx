import React from "react";
import aboutme from "../../assets/aboutme3.webp";
import "./header.css";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="about-section">
          <h2><Button variant="contained">About Me</Button></h2>
          <div className="underline"></div>
          <img src={aboutme} alt="aboutme" />
          <div className="text">
            <h5>Hey there I am</h5>
            <h2>Deepak</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              ipsum soluta ratione cumque mollitia tenetur aliquam reprehenderit
              a dicta eaque. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Velit nobis culpa ea, officiis vitae doloremque eveniet
              sapiente accusamus sint dolorem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
