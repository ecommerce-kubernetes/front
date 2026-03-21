const express = require("express");
const router = express.Router();

const token = require("../data/auth/auth.json");
const createUserRes = require("../data/auth/auth.json");

router.post("/auth/login", (req, res) => {
  res.json(token);
});

router.post("/auth/logout", (req, res) => {
  res.sendStatus(204);
});

router.post("/auth/refresh", (req, res) => {
  res.json(token);
});

router.post("/users", (req, res) => {
  res.json(createUserRes);
});

module.exports = router;
