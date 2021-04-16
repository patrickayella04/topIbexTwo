import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function HamburNavi() {
  return (
    <i className="burger">
      <FontAwesomeIcon icon={faBars} size="2x" />
    </i>
  );
}

export default HamburNavi;
