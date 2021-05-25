import React from "react";

function EmailArea() {
  return (
    <div className="email-area">
      <form method="POST" action="/send">
        <p className="name-para input-para">
          <label className="name-lable input-lable">Name</label>
          <input type="text" name="name" />
        </p>
        <p className="company-para input-para">
          <label className="company-lable input-lable">Company</label>
          <input type="text" name="company" />
        </p>
        <p className="email-para input-para">
          <label className="email-lable input-lable">Email Address</label>
          <input type="email" name="email" />
        </p>
        <p className="phone-para input-para">
          <label className="phone-lable input-lable">Phone Number</label>
          <input type="text" name="phone" />
        </p>
        <p className="message-para input-para">
          <label className="message-lable input-lable">Message</label>
          <textarea name="message" rows="5"></textarea>
        </p>
        <p className="submit-para input-para">
          <button className="email-submit" type="submit" disabled>
            Submit
          </button>
        </p>
      </form>
    </div>
  );
}

export default EmailArea;
