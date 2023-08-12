const Tasks = require("../models/tasks.model");

exports.getAllTasks = async () => {
  const tasks = await Tasks.find({}, { _id:0,description: 0 });
  return tasks.map((task)=>task.toObject());
};

exports.getTaskDetailsById = async (taskId) => {
  const taskDetails = await Tasks.findOne({ taskId},{_id:0});
  return taskDetails?.toObject();
};

exports.createTask = async ({ taskId,title, description, dueDate, completed }) => {
 const newTask = new Tasks({ taskId,title, description, dueDate, completed });
  const savedTask = await newTask.save();
  return savedTask.toObject();
};

exports.updateTask = async (taskId, data) => {
  return (await Tasks.findOneAndUpdate({taskId}, data, { new: true })).toObject();
};

exports.deleteTask = async(taskId)=>{
    return await Tasks.findOneAndDelete({taskId});
}