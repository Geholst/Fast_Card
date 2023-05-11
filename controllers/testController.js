const express = require("express");
const router = express.Router();
const timer = require("../public/js/timer");
const path = require("path");
const app = express();

router.get("/", (req, res) => {
  res.render("test", { layout: "index.handlebars" });
});

module.exports = router;
