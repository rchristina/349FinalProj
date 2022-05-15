//depenencies
const dotenv = require("dotenv");
const express = require("express");

const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

const port = 3001;

const Users = require("./models/userSchema");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Register a user
app.post("/register", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const createUser = new Users({
      username: username,
      password: password,
    });

    const created = await createUser.save();
    console.log(created);
    res.status(200).send("Registered");
  } catch (error) {
    res.status(400).send(error);
  }
});

//Log In a user
app.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    //find if exists
    const user = await Users.findOne({ username: username });
    if (user) {
      if (password == user.password) {
        res.status(200).send("LoggedIn");
      } else {
        res.status(400).send("Invalid Credentials");
      }
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

//run server
app.listen(port, () => {
  console.log("server is Listening");
});
