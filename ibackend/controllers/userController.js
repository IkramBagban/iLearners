// exports.getUsers
const User = require("../model/user");

exports.postUser = (req,res) => {
  const { username, email, password } = req.body;

  const user = new User({ username, email, password });
  // create new user.
  user
    .save()
    .then((result) => {
      console.log("User Created");
      res.json({message : 'User has been created'})
    })
    .catch((err) => {
      console.log(err);
    });

};
