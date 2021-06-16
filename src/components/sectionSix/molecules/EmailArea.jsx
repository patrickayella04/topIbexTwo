import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Handlebars from "handlebars";
import emailjs from "emailjs-com";

function EmailArea() {
  const Form = () => {
    function sendEmail(e) {
      e.preventDefault();

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
              <input type="text" name="from_name" placeholder="Name" />
            </p>
            <p className="email-para input-para">
              {/* <label className="email-lable input-lable">Email Address</label> */}
              <input type="email" name="reply_to" placeholder="Email Address" />
            </p>
            <p className="company-para input-para">
              {/* <label className="company-lable input-lable">Company</label> */}
              <input type="text" name="from_company" placeholder="Company" />
            </p>

            <p className="phone-para input-para">
              {/* <label className="phone-lable input-lable">Phone Number</label> */}
              <input type="text" name="from_phone" placeholder="Phone" />
            </p>
          </div>
          <p className="message-para input-para">
            {/* <label className="message-lable input-lable">Message</label> */}
            <textarea name="message" rows="5" placeholder="Message"></textarea>
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

// const [email, setEmail] = useState("");
// // const [message, setMessage] = useState("");
// // const [name, setName] = useState("");
// // const [number, setNumber] = useState("");
// // const [company, setCompany] = useState("");

// // const [result, setResult] = useState(null);

// // const handleRequest = async (e) => {
// //   e.preventDefault();
// //   console.log({ email, message, name, number, company });
// //   const body = {
// //     email,
// //     message,
// //     number,
// //     name,
// //     company,
// //   };
// //   await axios
// //     .post("/send", body, {
// //       headers: {
// //         "Content-type": "application/json",
// //       },
// //     })
// //     .then((res) => {
// //       alert("Email Sent Succesfully");
// //       console.log(res);
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// // };
// const [state, setState] = useState({
//   name: "",
//   email: "",
//   company: "",
//   message: "",
//   number: "",
// });

// const [result, setResult] = useState(null);

// const sendEmail = (event) => {
//   event.preventDefault();
//   axios
//     .post("/send", { ...state })
//     .then((response) => {
//       setResult(response.data);
//       setState({
//         name: "",
//         email: "",
//         company: "",
//         message: "",
//         phone: "",
//       });
//     })
//     .catch(() => {
//       setResult({
//         success: false,
//         message: "Something went wrong. Try again later",
//       });
//     });
// };

// const onInputChange = (event) => {
//   const { name, value } = event.target;

//   setState({
//     ...state,
//     [name]: value,
//   });
// };
