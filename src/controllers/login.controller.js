const { User } = require("../db/models/users.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, {
        expiresIn: Date.now() + 60 * 60 * 1000,
      });
      res.cookie("token", token);
      res.status(200).json({auth: true, user });
    } else {
      res
        .status(401)
        .json({ message: "Username or password incorrect" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  login,
};
