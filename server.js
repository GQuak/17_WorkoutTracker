// Required Node Modules
const express = require("express");
const mongoose = require("mongoose");

// Creating the port variable
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Require the routes
app.use(require("./routes"));

// Start the apps server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
