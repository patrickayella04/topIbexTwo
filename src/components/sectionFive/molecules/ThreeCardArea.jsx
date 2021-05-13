import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
function ThreeCardArea() {
  return (
    <div className="three-card-area">
      <div className="pic-box-three five-icon">
        <FontAwesomeIcon
          icon={faBalanceScale}
          size="2x"
          className="five-icon"
        />
      </div>
      <h6 className="header-box">OME</h6>
      <p className="header-box-text">
        Succeed online by focusing on your site’s mobile experience as well by
        optimizing the mobile experience (OME).
      </p>
    </div>
  );
}

export default ThreeCardArea;
