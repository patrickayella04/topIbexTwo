import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

function TwoCardArea() {
  return (
    <div className="two-card-area">
      <div className="pic-box-two five-icon">
        <FontAwesomeIcon icon={faBookOpen} size="2x" className="five-icon" />
      </div>
      <h6 className="header-box">OPO</h6>
      <p className="header-box-text">
        On-page optimization (OPO) ensures prospects have the best user
        experience while converting them into a lead.
      </p>
    </div>
  );
}

export default TwoCardArea;
