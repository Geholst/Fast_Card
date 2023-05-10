const express = require("express");
const router = express.Router();
const timer = require("../public/js/timer");

router.get("/", (req, res) => {
  res.send("test page found!");
});

module.exports = router;
