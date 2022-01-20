const express = require("express");
const mongoose= require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose
  .connect("mongodb://localhost/tddDB", {})
  .then(() =>
    console.log(`Connected to MongoDB at mongodb://localhost/tddDB...`)
  )
  .catch(err => {
    console.log("Failed to connect to MongoDB...", err);
    process.exit();
  });

app.get('/api/home/', (req, res) => {
  res.send({ message: 'Hello WWW!' });
});

app.listen(3008, () => {
  console.log('Application listening on port 3008!');
});

module.exports = app;
