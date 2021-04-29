import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons";

function OneCardArea() {
  return (
    <div className="one-card-area">
      <div className="pic-box-one">
        <FontAwesomeIcon icon={faClone} size="2x" />
      </div>
      <h6 className="header-box">TILE OF CARD</h6>
      <p className="header-box-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat
        at eros et sagittis.
      </p>
    </div>
  );
}

export default OneCardArea;
