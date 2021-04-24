import React from "react";
import BottomBoxArea from "../molecules/BottomBoxArea";
import BottomTwoBox from "../molecules/BottomTwoBox";
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
        <div className="desktop-two-area">
          <div className="box1-two">
            <MainSecondHeaderArea />
            <DesHeaderArea />
            <SecondHeaderArea />
            <SecondDesHeaderArea />
            <CircleImgArea />
          </div>
          <div className="box2-two">
            <CardImageArea />
            <InnerCardArea />
          </div>
        </div>
        <BottomBoxArea />
      </div>

      <div className="section-two mobile-section-two">
        <MainSecondHeaderArea />
        <DesHeaderArea />
        <SecondHeaderArea />
        <SecondDesHeaderArea />
        <CircleImgArea />
        <CardImageArea />
        <InnerCardArea />
        <BottomBoxArea />
        <BottomTwoBox />
      </div>
    </>
  );
}

export default SectionTwo;
