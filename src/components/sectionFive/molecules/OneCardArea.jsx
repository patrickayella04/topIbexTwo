import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons";

function OneCardArea() {
  return (
    <div className="one-card-area">
      <div className="pic-box-one five-icon">
        <FontAwesomeIcon icon={faClone} size="2x" className="five-icon" />
      </div>
      <h6 className="header-box">SEO</h6>
      <p className="header-box-text">
        One of the most critical aspects of website optimization is search
        engine optimization (SEO). It's great to be found, but better to be
        seen.
      </p>
    </div>
  );
}

export default OneCardArea;
