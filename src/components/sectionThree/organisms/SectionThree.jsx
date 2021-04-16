import React from "react";
import TBottomBoxArea from "../molecules/3_BottomBoxArea";
import TCardImageArea from "../molecules/3_CardImageArea";
import TCircleImgArea from "../molecules/3_CircleImgArea";
import TDesHeaderArea from "../molecules/3_DesHeaderArea";
import TInnerCardArea from "../molecules/3_InnerCardArea";
import TMainHeaderArea from "../molecules/3_MainHeaderArea";
import TSecondDesHeaderArea from "../molecules/3_SecondDesHeaderArea";
import TSecondHeaderArea from "../molecules/3_SecondHeaderArea";

function SectionThree() {
  return (
    <>
      <div className="section-three">
        <TMainHeaderArea />
        <TDesHeaderArea />
        <TSecondHeaderArea />
        <TSecondDesHeaderArea />
        <TCircleImgArea />
        <TCardImageArea />
        <TInnerCardArea />
        <TBottomBoxArea />
      </div>
    </>
  );
}

export default SectionThree;
