import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Handlebars from "handlebars";

function Contact() {
  const Form = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [company, setCompany] = useState("");

    const handleRequest = async (e) => {
      e.preventDefault();
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
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <div className="email-area">
        <form onSubmit={handleRequest} method="POST" action="/send">
          <p className="name-para input-para">
            <label className="name-lable input-lable">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          <p className="company-para input-para">
            <label className="company-lable input-lable">Company</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </p>
          <p className="email-para input-para">
            <label className="email-lable input-lable">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p className="phone-para input-para">
            <label className="phone-lable input-lable">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </p>
          <p className="message-para input-para">
            <label className="message-lable input-lable">Message</label>
            <textarea
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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

export default Contact;
