import React from "react";
import ReactDOM from "react-dom";
import Handlebars from "handlebars";

function Contact() {
  const hbr = `
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Acme Web Design</title>
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css"
    />
    <link rel="stylesheet" href="public/css/style.css" />
  </head>
  <body>
    <div class="container">
      <h1 class="brand"><span>Acme</span> Web Design</h1>
      <div class="wrapper animated bounceInLeft">
        <div class="company-info">
          <h3>Acme Web Design</h3>
          <ul>
            <li><i class="fa fa-road"></i> 44 Something st</li>
            <li><i class="fa fa-phone"></i> (555) 555-5555</li>
            <li><i class="fa fa-envelope"></i> test@acme.test</li>
          </ul>
        </div>
        <div class="contact">
          <h3>Email Us</h3>
          {{msg}}
          <!-- We will add in a variable which will say email sent -->
          <form method="POST" action="/send">
            <p>
              <label>Name</label>
              <input type="text" name="name" />
            </p>
            <p>
              <label>Company</label>
              <input type="text" name="company" />
            </p>
            <p>
              <label>Email Address</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label>Phone Number</label>
              <input type="text" name="phone" />
            </p>
            <p class="full">
              <label>Message</label>
              <textarea name="message" rows="5"></textarea>
            </p>
            <p class="full">
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </body>
</html>
    `;

  const template = Handlebars.compile(hbr);
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: template() }}></div>
    </div>
  );
}

export default Contact;
