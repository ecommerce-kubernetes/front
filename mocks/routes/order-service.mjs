import express from "express";
import addCart from "../data/cart/add-cart.json" with { type: "json" };
import getCart from "../data/cart/get-cart.json" with { type: "json" };
import updateCart from "../data/cart/update-cart.json" with { type: "json" };

const router = express.Router();

router.post("/carts", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send("unauthorized");
  }
  res.json(addCart);
});

router.get("/carts", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send("unauthorized");
  }
  res.json(getCart);
});

router.patch("/carts/:id", (req, res) => {
  res.json(updateCart);
});

router.delete("/carts", (req, res) => {
  res.status(204).send();
});

export default router;
