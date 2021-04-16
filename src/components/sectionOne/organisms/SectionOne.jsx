import React from "react";
import ButtonOneArea from "../molecuels/ButtonOneArea";
import ImgArea from "../molecuels/ImgArea";
import MainHeaderArea from "../molecuels/MainHeaderArea";
import ParaDescription from "../molecuels/ParaDescriptionArea";

function SectionOne() {
  return (
    <>
      <div className="section-one">
        <ImgArea />
        <MainHeaderArea />
        <ParaDescription />
        <ButtonOneArea />
      </div>
    </>
  );
}

export default SectionOne;
