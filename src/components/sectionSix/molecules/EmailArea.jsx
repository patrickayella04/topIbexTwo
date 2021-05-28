import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Handlebars from "handlebars";

function EmailArea() {
  const Form = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [company, setCompany] = useState("");

    const handleRequest = async (e) => {
      e.preventDefault();
      console.log({ email, message, name, number, company });
      const body = {
        email,
        message,
        number,
        name,
        company,
      };
      await axios
        .post("/send", body, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          alert("Email Sent Succesfully");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <div className="email-area">
        <form
          className="contact-form"
          onSubmit={handleRequest}
          method="POST"
          action="/send"
        >
          <div className="form-wrapper">
            <p className="name-para input-para">
              {/* <label className="name-lable input-lable">Name</label> */}
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </p>
            <p className="email-para input-para">
              {/* <label className="email-lable input-lable">Email Address</label> */}
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
            </p>
            <p className="company-para input-para">
              {/* <label className="company-lable input-lable">Company</label> */}
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company"
              />
            </p>

            <p className="phone-para input-para">
              {/* <label className="phone-lable input-lable">Phone Number</label> */}
              <input
                type="text"
                name="phone"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone"
              />
            </p>
          </div>
          <p className="message-para input-para">
            {/* <label className="message-lable input-lable">Message</label> */}
            <textarea
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
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
