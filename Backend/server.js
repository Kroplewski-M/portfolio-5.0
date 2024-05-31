// backend/server.js
require("dotenv").config();

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mailjet = require("node-mailjet").apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);

const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { Email, Name, Message } = req.body;

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
        Subject: `Portfolio message. ${Email}`,
        TextPart: `Name ${Name}`,
        HTMLPart: `<p>Message from ${Name}</p>
        <p>Email: ${Email}</p>
        <p>Message: ${Message}</p>`,
        CustomID: "PortfolioMessage",
      },
    ],
  });
  request
    .then((result) => {
      res.status(200).send(result.body);
    })
    .catch((err) => {
      res.status(500).send(err.statusCode);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
