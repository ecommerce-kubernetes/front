const express = require("express"); 
const router = express.Router();

const token = require("../data/auth/auth.json")

router.post("/auth/login", (req, res) => {
  res.json(token);
});

module.exports = router;