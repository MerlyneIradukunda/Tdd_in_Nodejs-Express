const express = require("express");
const mongoose= require("mongoose");
require('dotenv').config()


const usersRouter = require("./src/routes/user.route");

var uri=`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.etiat.mongodb.net/TestDB?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(uri)
  .then(() =>
    console.log(`Connected to MongoDB successfully...`)
  )
  .catch(err => {
    console.log("Failed to connect to MongoDB...", err);
    process.exit();
  });

app.get('/api/home/', (req, res) => {
  res.send( 'Hello World!' );
});

app.use("/api/users", usersRouter);

$PORT=2012;
app.listen($PORT, () => {
  console.log('Application listening on port '+$PORT);
});

module.exports = app;
