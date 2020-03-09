const express = require("express");
const swifts = require("../models/users");
const router = express.Router();

router.get("/", (req, res, next) => {
  swifts
    .find()
    .exec()
    .then(docs => {
      res.status(200).json({
        message: "Swifts",
        Doc: docs
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", (req, res, next) => {
  const swift = new swifts({
    swift: req.body.swift,
    description: req.body.description
  });
  swift
    .save()
    .then(doc => {
      console.log(doc);
      res.status(200).json({
        message: "Data saved"
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
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
