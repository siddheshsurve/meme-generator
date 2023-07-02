import React from "react";
import logo from "../images/troll-face.png";

const Navbar = () => {
  return (
    <header className="header">
      <img src={logo} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Pro</h4>
    </header>
  );
};

export default Navbar;
