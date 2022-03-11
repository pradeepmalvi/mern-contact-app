const User = require("../models/userModal");

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json({ status: true, data: users });
};

const addUser = async (req, res) => {
  const { name, email, phone, hobbies } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ status: false, message: "User already exists" });
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    phone,
    hobbies,
  });

  if (user) {
    res.json({ status: true, data: user, message: "User added" });
  } else {
    res.status(400);
    throw new Error("invaild user data");
  }
};

const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.hobbies = req.body.hobbies || user.hobbies;

    const updateUser = await user.save();

    res.json({
      status: true,
      message: "User Updated",
      data: {
        _id: updateUser.id,
        name: updateUser.name,
        email: updateUser.email,
        phone: updateUser.phone,
        hobbies: updateUser.hobbies,
      },
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.delete();
    res.json({ status: true, message: "User deleted" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
