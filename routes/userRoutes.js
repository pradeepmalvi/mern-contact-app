const express = require("express");
const {
  getUsers,
  addUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getUsers);
router.route("/add").post(addUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
