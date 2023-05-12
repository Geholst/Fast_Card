const express = require("express");
const router = express.Router();
const path = require("path");

// //
// const ttimeLabel = document.getElementById("timer");
// const aa = document.getElementById("a");
// const bb = document.getElementById("b");
// const cc = document.getElementById("c");
// const dd = document.getElementById("d");

router.get("/", (req, res) => {
  //   res.send("Review Session");
  res.sendFile(path.join(__dirname, "../public/js/review.js"));
});

module.exports = router;
