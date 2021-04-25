import React from "react";
import FBottomBoxArea from "../molecules/4_BottomBoxArea";
import BottomTwoBox from "../molecules/4_BottomTwoBox";
import FCardImageArea from "../molecules/4_CardImageArea";
import FCircleImgArea from "../molecules/4_CircleImgArea";
import FDesHeaderArea from "../molecules/4_DesHeaderArea";
import FInnerCardArea from "../molecules/4_InnerCardArea";
import FMainSecondHeaderArea from "../molecules/4_MainSecondHeaderArea";
import FSecondDesHeaderArea from "../molecules/4_SecondDesHeaderArea";
import FSecondHeaderArea from "../molecules/4_SecondHeaderArea";

function SectionFour() {
  return (
    <>
      <div className="section-four">
        <div className="desktop-four-area">
          <div className="box1-four">
            <FMainSecondHeaderArea />
            <FDesHeaderArea />
            <FSecondHeaderArea />
            <FSecondDesHeaderArea />
            <FCircleImgArea />
          </div>
          <div className="box2-four">
            <FCardImageArea />
            <FInnerCardArea />
          </div>
        </div>
        <FBottomBoxArea />
      </div>

      <div className="section-four mobile-section-four">
        <FMainSecondHeaderArea />
        <FDesHeaderArea />
        <FSecondHeaderArea />
        <FSecondDesHeaderArea />
        <FCircleImgArea />
        <FCardImageArea />
        <FInnerCardArea />
        <FBottomBoxArea />
        <BottomTwoBox />
      </div>
    </>
  );
}

export default SectionFour;
