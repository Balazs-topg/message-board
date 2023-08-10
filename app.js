const express = require("express");
const path = require("path");
const pug = require("pug");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const messages = [
  { text: "Hello World!", user: "Charles", added: new Date() },
  ,
  {
    text: `I live in a low income housing environment that goes by the government name of "Section 8." Me and a group of my allies control certain areas of this section in order to run our illegitimate business. We possess unregistered firearms, stolen vehicles, mind-altering inhibitors and only use cash for financial purchases. If anyone would like to settle unfinished altercations, I will be more than happy to release my address. I would like to warn you; I am a very dangerous person and I regularly disobey the law.
  `,
    user: "John Doe",
    added: new Date(),
  },
];

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { messages });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/new", (req, res) => {
  const { userName, message } = req.body;

  const newMessage = {
    text: message,
    user: userName,
    added: new Date(),
  };
  messages.push(newMessage);

  res.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
