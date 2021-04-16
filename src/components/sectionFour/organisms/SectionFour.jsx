import React from "react";
import FBottomBoxArea from "../molecules/4_BottomBoxArea";
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
        <FMainSecondHeaderArea />
        <FDesHeaderArea />
        <FSecondHeaderArea />
        <FSecondDesHeaderArea />
        <FCircleImgArea />
        <FCardImageArea />
        <FInnerCardArea />
        <FBottomBoxArea />
      </div>
    </>
  );
}

export default SectionFour;
