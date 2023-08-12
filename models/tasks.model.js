const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const taskSchema = new Schema({
  // _id: {
  //   type: new Mongoose.Types.ObjectId(),
  // },
  taskId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
});


module.exports = Mongoose.model("Tasks", taskSchema, "Tasks");
