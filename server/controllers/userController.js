"use strict";
const Models = require("../models");
// finds all users in DB, then sends array as response
const getUsers = (res) => {
  Models.User.findAll({})
    .then((data) => {
      res.status(200).send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};
// uses JSON from request body to create new user in DB
const createUser = (data, res) => {
  Models.User.create(data)
    .then((data) => {
      res.status(201).send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};
// uses JSON from request body to update user ID from params
const updateUser = (req, res) => {
  Models.User.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.status(204).send({ result: 204, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};
// deletes user matching email from params
const deleteUser = (req, res) => {
  Models.User.destroy({ where: { email: req.params.email } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const findUserByEmail = (email) => {
  return Models.User.findOne({ where: { email: email } });
};

// Update user information by email
const updateUserByEmail = async (email, newData, res) => {
  try {
    const user = await findUserByEmail(email);
    if (user) {
      // Update user information
      await user.update(newData);
      res
        .status(204)
        .send({
          result: 204,
          message: "User information updated successfully",
        });
    } else {
      res.status(404).send({ result: 404, message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ result: 500, error: err.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  updateUserByEmail,
};
