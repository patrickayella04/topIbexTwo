import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function ParaDescriptionText() {
  return (
    <>
      {/* //{" "}
      <p className="para-des-text">
        // Maximize the growth of your business <br /> with its own bespoke
        website // designed for the future. //{" "}
      </p> */}
      <p className="para-des-text">
        Maximize the growth of your gardens' appeal with its own bespoke lawn
        mowing experience. Check Our results on Instagram!
      </p>
      <a
        href="https://www.instagram.com/topibex_services/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="5x" />
      </a>
    </>
  );
}

export default ParaDescriptionText;
