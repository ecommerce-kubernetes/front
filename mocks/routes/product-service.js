const express = require("express");
const router = express.Router();

const categoryTree = require("../data/category/category-tree.json")
const productList = require("../data/product/product-list.json")

router.get("/categories/tree", (req, res) => {
  res.json(categoryTree);
});

router.get("/products", (req, res) => {
  res.json(productList);
});

module.exports = router;