//Adding required modules
const router = require("express").Router();
const path = require("path");

// Creating a route to GET exercises
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// Creating a route to GET stats for the workout dashboard
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
