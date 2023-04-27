const express = require("express");

const app = express();
const sendMail = require("./controllers/sendMail");

let PORT = 5000;

app.get("/", (req, res) => {
  res.send("I am a server");
});

app.get("/mail", sendMail);

// smtp = simple mail transfer protocol

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am live in port no: ${PORT}`);
    });
  } catch (error) {}
};

start();
