import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

function TwoCardArea() {
  return (
    <div className="two-card-area">
      <div className="pic-box-two five-icon">
        <FontAwesomeIcon icon={faBookOpen} size="2x" className="five-icon" />
      </div>
      <h6 className="header-box">TILE OF CARD</h6>
      <p className="header-box-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat
        at eros et sagittis.
      </p>
    </div>
  );
}

export default TwoCardArea;
