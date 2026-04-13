import express from "express";
import addCart from "../data/cart/add-cart.json" with { type: "json" };

const router = express.Router();

router.post("/carts", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401);
  }
  res.json(addCart);
});

export default router;
