import express from "express";
import categoryTree from "../data/category/category-tree.json" with { type: "json" };
import productList from "../data/product/product-list.json" with { type: "json" };
import productDetail from "../data/product/product-detail.json" with { type: "json" };
const router = express.Router();

router.get("/categories/tree", (req, res) => {
  res.json(categoryTree);
});

router.get("/products", (req, res) => {
  res.json(productList);
});

router.get("/products/:id", (req, res) => {
  res.json(productDetail);
});

export default router;
