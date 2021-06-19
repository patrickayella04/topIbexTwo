import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Handlebars from "handlebars";
import emailjs from "emailjs-com";

function EmailArea() {
  const Form = () => {
    const [input, setInput] = useState(false);

    function sendEmail(e) {
      e.preventDefault();

      if (input === true) {
        emailjs
          .sendForm(
            "service_a374dk8",
            "template_77mr41i",
            e.target,
            "user_ubGTGQUa1rTyqnUHX798m"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
        alert("Message Sent!");
      } else {
        alert("Please Enter Correct Information");
      }
    }

    return (
      <div className="email-area">
        <form
          className="contact-form"
          onSubmit={sendEmail}
          method="POST"
          action="/send"
        >
          <div className="form-wrapper">
            <p className="name-para input-para">
              {/* <label className="name-lable input-lable">Name</label> */}
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                onChange={() => setInput(true)}
              />
            </p>
            <p className="email-para input-para">
              {/* <label className="email-lable input-lable">Email Address</label> */}
              <input
                type="email"
                name="reply_to"
                placeholder="Email Address"
                onChange={() => setInput(true)}
              />
            </p>
            <p className="company-para input-para">
              {/* <label className="company-lable input-lable">Company</label> */}
              <input
                type="text"
                name="from_company"
                placeholder="Company"
                onChange={() => setInput(true)}
              />
            </p>

            <p className="phone-para input-para">
              {/* <label className="phone-lable input-lable">Phone Number</label> */}
              <input
                type="text"
                name="from_phone"
                placeholder="Phone"
                onChange={() => setInput(true)}
              />
            </p>
          </div>

          <p className="message-para input-para">
            {/* <label className="message-lable input-lable">Message</label> */}
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              onChange={() => setInput(true)}
            ></textarea>
          </p>

          <p className="submit-para input-para">
            <button className="email-submit" type="submit">
              Submit
            </button>
          </p>
        </form>
      </div>
    );
  };

  return (
    <>
      <Form />
    </>
  );
}

export default EmailArea;
