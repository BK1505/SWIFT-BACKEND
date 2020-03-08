const express = require("express");
const router = express.Router();

router.get("/:smsg", (req, res, next) => {
  res.status(202).json({
    message: "data retrived"
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "data created"
  });
});

router.patch("/:smsg", (req, res, next) => {
  res.status(200).json({
    message: "data updated"
  });
});

router.delete("/:smsg", (req, res, next) => {
  res.status(200).json({
    message: "data deleted"
  });
});

module.exports = router;
