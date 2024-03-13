"use strict";
const Models = require("../models");
const jwt = require('jsonwebtoken')
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
      const {firstName, lastName, email } = data
      const filteredData = {firstName, lastName, email} 
      res.status(201).send({ result: 201, data: filteredData });
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

// Update user information by email
const updateUserByEmail = async (email, newData, res) => {
  try {
    const user = await Models.User.findOne({ where: { email: email }, attributes: {exclude: [ 'password', 'createdAt', 'updatedAt'] } } );
    if (user) {
      // Update user information
      await user.update(newData);
       const updatedUser = await Models.User.findOne({raw: true, where: { email: newData.email }, attributes: {exclude: [ 'password', 'createdAt', 'updatedAt'] } } );
      

      return res
        .status(200)
        .send({
          result: 200,
          message: "User information updated successfully",
          user: updatedUser
        });
    } else {
      res.status(404).send({ result: 404, message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ result: 500, error: err.message });
  }
};

const login = async (req, res) =>{
  try {
    const userEmail = req.body.email 
    const userPassword  = req.body.password;
    const user = await Models.User.findOne({raw: true, where: { email: userEmail }, attributes: {exclude: ['id', 'createdAt', 'updatedAt'] } } );
    
    // Checks first for user, then password. If either fails, returns the message. This way a rouge can't determine if they have a valid username.
    if ((!user) || (user.password !== userPassword)) {
      return res.status(404).send({ result: 404, message: "There is a problem with either your username or password" });
    }

    // Password matches, user is authenticated
    const token = jwt.sign({userId: user.id}, process.env.NEXTAUTH_SECRET, {expiresIn: '1h'})
    
    return res.status(200).send({ result: 200, message: "Login successful", user: user, token: token });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ result: 500, error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await Models.User.findOne({raw: true, where: { email: email }, attributes: {exclude: ['id', 'password', 'createdAt', 'updatedAt'] } } );
    //returnedUser = user.user()
    console.log('getUser response: ', user)
    return res.status(200).send({result: 200, data: user})
  } catch (error) {
    
  }
}


module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  updateUserByEmail,
  login,
  getUser
};
