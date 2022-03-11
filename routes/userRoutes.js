const express = require("express");
const {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getUsers);
router.route("/add").post(addUser);
router.route("/update/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
