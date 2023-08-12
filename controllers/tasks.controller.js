const { createTaskSchema } = require("../schemas/task.schema");
const TaskService = require("../services/tasks.services");
const moment = require("moment");

// Fetch all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();
    const formatedTasks = tasks.map((task) => {
      const formatedDueDate = moment(new Date(task.dueDate)).format(
        "DD-MMM-YYYY"
      );

      return {
        ...task,
        dueDate: formatedDueDate,
      };
    });
    res.status(200).json(formatedTasks);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching tasks" });
  }
};

// Fetch a single task by ID
exports.getTaskDetails = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await TaskService.getTaskDetailsById(parseInt(taskId));

    if (!task) return res.status(404).json({ error: "Task not found" });

    task.dueDate = moment(new Date(task.dueDate)).format("DD-MM-YYYY");
    delete task.__v;

    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the task" });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const payload = req.body;
  
    const { success,data } = createTaskSchema.safeParse(payload);

    if(!success){
      return res.status(400).json({ error: "Invalid Payload" });
    }
    data.taskId = Math.floor(Math.random() * 10000);
    data.dueDate = moment(data.dueDate, "DD-MM-YYYY");

    const savedTask = await TaskService.createTask(data);
    res.status(201).json(savedTask);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to create a new task" });
  }
};

// Update an existing task
exports.updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    if (!taskId) return res.status(404).json({ error: "TaskId is required" });

    const { success,data } = updateTaskSchema.safeParse(payload);

    if(!success){
      return res.status(400).json({ error: "Invalid Payload" });
    }
    

    data.dueDate = moment(data.dueDate, "DD-MM-YYYY");
    const updatedTask = await TaskService.updateTask(
      parseInt(taskId),
      data
    );
    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    updatedTask.dueDate = moment(new Date(updatedTask?.dueDate)).format(
      "DD-MM-YYYY"
    );
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: "Failed to update the task" });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    if (!taskId) return res.status(404).json({ error: "TaskId is required" });

    const deletedTask = await TaskService.deleteTask(parseInt(taskId));
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to delete the task" });
  }
};
