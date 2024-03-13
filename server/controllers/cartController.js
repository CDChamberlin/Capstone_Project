"use strict";
const Models = require("../models");

// finds all carts in DB, then sends array as response
const getCarts = (res) => {
  Models.Cart.findAll({})
    .then((data) => {
      res.status(200).send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

// creates a new cart in the DB
const createCart = (data, res) => {
  Models.Cart.create(data)
    .then((data) => {
      res.status(201).send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

// updates a cart based on cart ID
const updateCart = (req, res) => {
  Models.Cart.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.status(204).send({ result: 204, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

// deletes cart matching ID from params
const deleteCart = (req, res) => {
  Models.Cart.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

// Find cart by userID
const findCartByUserId = (userId) => {
  return Models.Cart.findOne({ where: { userID: userId } });
};

// Update cart information by userID
const updateCartByUserId = async (userId, newData, res) => {
  try {
    const cart = await findCartByUserId(userId);
    if (cart) {
      // Update cart information
      await cart.update(newData);
      res
        .status(204)
        .send({
          result: 204,
          message: "Cart information updated successfully",
        });
    } else {
      res.status(404).send({ result: 404, message: "Cart not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ result: 500, error: err.message });
  }
};

module.exports = {
  getCarts,
  createCart,
  updateCart,
  deleteCart,
  updateCartByUserId
};