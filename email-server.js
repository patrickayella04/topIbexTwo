const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

// View engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Body Parser Middleware
//app.use(express.urlencoded({ extended: false })); //writes out - [Object: null prototype], but 'extended: true' takes it away.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("contact", { layout: false });
  //res.send("Hello");
});

app.post("/send", async (req, res) => {
  //console.log(req.body);
  const output = `
  <p>You have a new contact request</li>
  <h3>Contact Details</3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Company: ${req.body.company}</li>
  <li>Email: ${req.body.email}</li>
  <li>Phone: ${req.body.phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "topibex.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "info@topibex.com", // generated ethereal user
      pass: "1d6@P4&41mb#", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"topibex contact" <info@topibex.com>', // sender address
    to: "patrickayella04@gmail.com, info@topibex.com", // list of receivers
    subject: "Topibex Contact Request", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  // post().catch(console.error);
  res.render("contact", {
    layout: false,
    msg: "Email has been sent",
  });
  // res.render("contact", { msg: "Email has been sent" }, { layout: false });

  // res.render("contact", { msg: "Email has been sent" }, (err, layout) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     layout = { layout: false };
  //   }
  // });
});

app.listen(5000, () => console.log("Server started..."));

//////////////////////////////////////////////////////////////////////////
// const express = require("express");
// const bodyParser = require("body-parser");
// const exphbs = require("express-handlebars");
// const path = require("path");
// const nodemailer = require("nodemailer");
// const router = express.Router();

// const app = express();

// // Static folder
// app.use("/public", express.static(path.join(__dirname, "public")));

// // Body Parser Middleware
// //app.use(express.urlencoded({ extended: false })); //writes out - [Object: null prototype], but 'extended: true' takes it away.
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//   host: "topibex.com",
//   port: 465,
//   secure: true, // true for 465, false for other ports
//   auth: {
//     user: "info@topibex.com", // generated ethereal user
//     pass: "1d6@P4&41mb#", // generated ethereal password
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

// app.post("/send", (req, res, next) => {
//   //console.log(req.body);
//   const output = `
//   <p>You have a new contact request</li>
//   <h3>Contact Details</3>
//   <ul>
//   <li>Name: ${req.body.name}</li>
//   <li>Company: ${req.body.company}</li>
//   <li>Email: ${req.body.email}</li>
//   <li>Phone: ${req.body.phone}</li>
//   </ul>
//   <h3>Message</h3>
//   <p>${req.body.message}</p>
//   `;

//   // send mail with defined transport object
//   const info = {
//     from: '"topibex contact" <info@topibex.com>', // sender address
//     to: "patrickayella04@gmail.com, info@topibex.com", // list of receivers
//     subject: "Topibex Contact Request", // Subject line
//     text: "Hello world?", // plain text body
//     html: output, // html body
//   };

//   transporter.sendMail(info, (err, data) => {
//     if (err) {
//       res.json({
//         status: "err",
//       });
//       console.log(err);
//     } else {
//       res.json({
//         status: "success",
//       });
//       console.log("Email Sent" + data.response);
//     }
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

//   // post().catch(console.error);
//   //   res.render("contact", {
//   //     layout: false,
//   //     msg: "Email has been sent",
//   //   });
//   // res.render("contact", { msg: "Email has been sent" }, { layout: false });

//   // res.render("contact", { msg: "Email has been sent" }, (err, layout) => {
//   //   if (err) {
//   //     console.log(err);
//   //   } else {
//   //     layout = { layout: false };
//   //   }
//   // });
// });

// // serve PORT running here
// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => console.info(`server has started on ${PORT}`));

// app.listen(3001, () => console.log("Server started..."));
