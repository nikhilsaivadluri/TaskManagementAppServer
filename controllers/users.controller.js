const md5 = require('md5');
const jwt = require("jsonwebtoken");
const UserService = require("../services/users.services");
const Config = require('../Config/config');

// Fetch all tasks
exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const userDetails = await UserService.getUserDetails(userName);
    if (!userDetails)
      return res.status(400).json({ error: "Username doesn't exist!" });

    if (userDetails.password == md5(password)){
        const token = jwt.sign({ userName },
            Config.JWT_SECRET,
            {
                expiresIn: '24h' // expires in 24 hours
            }
        );
        const response = { token,userName}
        return res.status(200).send(response);
    }
    else return res.status(401).json({ error: "Invalid Password!" });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "An error occurred while login" });
  }
};
