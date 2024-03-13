"use strict";
const Models = require("../models");

const getProducts = (res) => {
  Models.Product.findAll({})
    .then((data) => {
      res.status(200).send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const createProduct = (data, res) => {
  Models.Product.create(data)
    .then((data) => {
      res.status(201).send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const updateProduct = (req, res) => {
  Models.Product.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.status(204).send({ result: 204, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const deleteProduct = (req, res) => {
  Models.Product.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const fetchProducts = async (req, res) => {
  try {
    // Fetch products from the external API
    const response = await axios.get("https://fakestoreapi.com/products", {
      params: { timestamp: new Date().getTime() },
    });

    // Extract products data from the response
    const productsData = response.data;

    // Update or insert products into the local database
    await Promise.all(
      productsData.map(async (product) => {
        // Check if the product already exists in the database
        const existingProduct = await Models.Product.findOne({
          where: { id: product.id },
        });

        if (existingProduct) {
          // If the product exists, update its details
          await existingProduct.update(product);
        } else {
          // If the product doesn't exist, create a new product entry
          await Models.Product.create(product);
        }
      })
    );

    // Send success response
    res
      .status(200)
      .json({ message: "Products fetched and updated successfully" });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  fetchProducts,
};
