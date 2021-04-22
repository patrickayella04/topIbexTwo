import React from "react";

import ButtonOneArea from "../molecuels/ButtonOneArea";
import ButtonTwo from "../molecuels/ButtonTwo";
import ImgArea from "../molecuels/ImgArea";

// import LogoArea from "../molecuels/logoArea";

import MainHeaderArea from "../molecuels/MainHeaderArea";
import ParaDescription from "../molecuels/ParaDescriptionArea";

function SectionOne() {
  return (
    <>
      <div className="section-one desk-section-one">
        {/* <LogoArea /> */}
        <div className="desktop-area">
          <div className="box1">
            <MainHeaderArea />
            <ParaDescription />
            <ButtonOneArea />
          </div>
          <div className="box2">
            <ButtonTwo />
            <ImgArea />
          </div>
        </div>

        <div className="mobile-section-one">
          <ImgArea />
          <MainHeaderArea />
          <ParaDescription />
          <ButtonOneArea />
          <ButtonTwo />
        </div>
      </div>
    </>
  );
}

export default SectionOne;
