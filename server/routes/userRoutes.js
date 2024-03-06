const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});
// matches POST requests sent to /api/users/create
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});
// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put("/:email", (req, res) => {
  const email = req.params.email;
  const newData = req.body; // Assuming the request body contains the updated user data
  Controllers.userController.updateUserByEmail(email, newData, res);
});
// matches DELETE requests to /api/users/123 (123 in id param)
router.delete("/:email", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});
module.exports = router;
