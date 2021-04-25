import React from "react";
import LittleHeader from "../molecules/LittleHeader";
import MainHeader from "../molecules/MainHeader";
import MainTextArea from "../molecules/MainTextArea";
import OneCardArea from "../molecules/OneCardArea";
import ThreeCardArea from "../molecules/ThreeCardArea";
import TwoCardArea from "../molecules/TwoCardArea";

function SectionFive() {
  return (
    <>
      <div className="section-five">
        <div className="desktop-five-area">
          <div className="box1-five">
            <LittleHeader />
            <MainHeader />
            <MainTextArea />
          </div>

          <div className="box2-five">
            <OneCardArea />
            <TwoCardArea />
            <ThreeCardArea />
          </div>
        </div>
      </div>

      <div className="section-five mobile-section-five">
        <LittleHeader />
        <MainHeader />
        <MainTextArea />
        <OneCardArea />
        <TwoCardArea />
        <ThreeCardArea />
      </div>
    </>
  );
}

export default SectionFive;
