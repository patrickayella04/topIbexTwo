import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
function ThreeCardArea() {
  return (
    <div className="three-card-area">
      <div className="pic-box-three">
        <FontAwesomeIcon icon={faBalanceScale} size="2x" />
      </div>
      <h6 className="header-box">TILE OF CARD</h6>
      <p className="header-box-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat
        at eros et sagittis.
      </p>
    </div>
  );
}

export default ThreeCardArea;
