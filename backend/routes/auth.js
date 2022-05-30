const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // eslint-disable-next-line no-undef
  obj = {
    a: "this",
    number: 34,
  };
  // eslint-disable-next-line no-undef
  res.json(obj);
});

module.exports = router;
