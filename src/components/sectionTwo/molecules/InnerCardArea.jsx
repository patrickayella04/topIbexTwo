import React from "react";
import OneInner from "../atoms/OneInner";
import ThreeInner from "../atoms/ThreeInner";
import TwoInner from "../atoms/TwoInner";

function InnerCardArea() {
  return (
    <div className="two-inner-card-area">
      <OneInner />
      <TwoInner />
      <ThreeInner />
    </div>
  );
}

export default InnerCardArea;
