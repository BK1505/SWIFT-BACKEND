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
  swifts
    .update({ _id: req.params.smsg }, req.body, (err, swift) => {
      if (err) {
        console.log("The error is:", err);
      }
    })
    .exec()
    .then(doc => {
      res.status(200).json({
        messge: "Data Updated"
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:smsg", (req, res, next) => {
  swifts
    .remove({ _id: req.params.smsg })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Data removed"
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
