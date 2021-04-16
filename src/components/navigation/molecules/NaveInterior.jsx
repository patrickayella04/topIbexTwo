import React from "react";
import Hamburger from "../atoms/HamburNavi";
import Logo from "../atoms/Logo";

function Navinterior() {
  return (
    <>
      <div className="nav-container">
        <Hamburger />
        <Logo />
      </div>
    </>
  );
}

export default Navinterior;
