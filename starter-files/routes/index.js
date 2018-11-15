const express = require("express");
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here
router.get("/", storeController.homePage);

router.get("/reverse/:name", (req, res) => {
  const reversedName = req.params.name
    .split("")
    .reduce((prev, cur) => cur + prev);
  res.send(reversedName);
});

router.get("/square/:number", (req, res) => {
  const number = req.params.number;
  const square = number * number;
  res.send(square.toString());
});

module.exports = router;
