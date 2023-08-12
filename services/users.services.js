const Users = require("../models/users.model");


exports.getUserDetails = async (userName) => {
  const userDetails = await Users.findOne({ userName}, { _id:0});
  return userDetails?.toObject();
};