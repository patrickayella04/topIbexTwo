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
