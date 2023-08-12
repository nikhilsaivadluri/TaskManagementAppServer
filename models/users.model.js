const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const usersSchema = new Schema({
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
})

module.exports = Mongoose.model("Users", usersSchema, "Users");