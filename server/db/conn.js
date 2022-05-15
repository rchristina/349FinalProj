const mongoose = require("mongoose");

const db =
  "mongodb+srv://User:fT4QPtSdMAvxWXkj@cluster0.3qqjn.mongodb.net/Recipe_Book?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });
