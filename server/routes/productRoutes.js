const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// GET /api/products
router.get("/", (req, res) => {
  productController.getProducts(res);
});

// POST /api/products/create
router.post("/create", (req, res) => {
  productController.createProduct(req.body, res);
});

// PUT /api/products/:id
router.put("/:id", (req, res) => {
  productController.updateProduct(req, res);
});

// DELETE /api/products/:id
router.delete("/:id", (req, res) => {
  productController.deleteProduct(req, res);
});

// GET /api/products/fetchProducts
router.get("/fetchProducts", (req, res) => {
  productController.fetchProducts(res);
});

module.exports = router;
