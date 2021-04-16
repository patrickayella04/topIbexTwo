import React from "react";
import BottomBoxArea from "../molecules/BottomBoxArea";
import CardImageArea from "../molecules/CardImageArea";
import CircleImgArea from "../molecules/CircleImgArea";
import DesHeaderArea from "../molecules/DesHeaderArea";
import InnerCardArea from "../molecules/InnerCardArea";
import MainSecondHeaderArea from "../molecules/MainSecondHeaderArea";
import SecondDesHeaderArea from "../molecules/SecondDesHeaderArea";
import SecondHeaderArea from "../molecules/SecondHeaderArea";

function SectionTwo() {
  return (
    <>
      <div className="section-two">
        <MainSecondHeaderArea />
        <DesHeaderArea />
        <SecondHeaderArea />
        <SecondDesHeaderArea />
        <CircleImgArea />
        <CardImageArea />
        <InnerCardArea />
        <BottomBoxArea />
      </div>
    </>
  );
}

export default SectionTwo;
