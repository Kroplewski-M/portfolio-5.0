// backend/server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mailjet = require("node-mailjet").apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { email, subject, text } = req.body;

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "kroplewskimateusz@gmail.com",
          Name: "Mateusz",
        },
        To: [
          {
            Email: "kroplewskimateusz@gmail.com",
            Name: "Mateusz",
          },
        ],
        Subject: "Greetings from Mailjet.",
        TextPart: "My first Mailjet email",
        HTMLPart: "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        CustomID: "AppGettingStartedTest",
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
