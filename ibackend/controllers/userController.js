// exports.getUsers
const User = require("../model/user");

exports.postUser = async (req, res) => {
  const { username, email, password } = req.body;

  const user = new User({ username, email, password });
  // create new user.

  try {
    const response = await user.save();
    console.log("User Created");
    res.status(201).json({ message: "User has been created", data: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Get All the Users", data: users });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
