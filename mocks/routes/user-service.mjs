import express from "express";
import token from "../data/auth/auth.json" with { type: "json" };
import createUser from "../data/user/user-create.json" with { type: "json" };
const router = express.Router();

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
  res.json(createUser);
});

export default router;
