import React from "react";
import OneInner from "../atoms/OneInner";
import ThreeInner from "../atoms/ThreeInner";
import TwoInner from "../atoms/TwoInner";

function TInnerCardArea() {
  return (
    <div className="three-inner-card-area">
      <OneInner />
      <TwoInner />
      <ThreeInner />
    </div>
  );
}

export default TInnerCardArea;
