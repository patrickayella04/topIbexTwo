import React from "react";
import ButtonArea from "../molecules/ButtonArea";
import DesArea from "../molecules/DesArea";
import FooterArea from "../molecules/FooterArea";
import MainHeader from "../molecules/MainHeader";

function SectionSix() {
  return (
    <>
      <div className="section-six">
        <div className="desktop-six-area">
          <MainHeader />
          <DesArea />
          <ButtonArea />
          <FooterArea />
        </div>
      </div>

      <div className="section-six mobile-section-six">
        <MainHeader />
        <DesArea />
        <ButtonArea />
        <FooterArea />
      </div>
    </>
  );
}

export default SectionSix;
