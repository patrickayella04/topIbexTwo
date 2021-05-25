import React, { useState } from "react";
import EmailArea from "./EmailArea";

function ButtonArea() {
  const [emailForm, setEmailForm] = useState(false);

  const handleForm = () => {
    setEmailForm(true);
  };

  return (
    <>
      {!emailForm ? (
        <button className="s-button-area" onClick={handleForm}>
          <p className="button-text-footer">Get in Touch</p>
        </button>
      ) : (
        <EmailArea />
      )}
    </>
  );
}

export default ButtonArea;
