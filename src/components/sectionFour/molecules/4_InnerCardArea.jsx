import React from "react";
import OneInner from "../atoms/OneInner";
import ThreeInner from "../atoms/ThreeInner";
import TwoInner from "../atoms/TwoInner";

function FInnerCardArea() {
  return (
    <div className="four-inner-card-area">
      <OneInner />
      <TwoInner />
      <ThreeInner />
    </div>
  );
}

export default FInnerCardArea;
