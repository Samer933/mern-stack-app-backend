const Task = require("../models/taskModel");

// create a task using the imported model "Task" beside "create" method
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Get/Read tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get a single task
const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res
        .status(404)
        .json(`No id matches with this id ${req.params.id}`);
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({
      msg: error.message + `No id matches with this id ${req.params.id}`,
    });
  }
};

// Delete a single task by id

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndRemove(req.params.id);
    if (!task) {
      return res
        .status(404)
        .json(`No id matches with this id ${req.params.id}`);
    }

    res.status(200).json(`The chosen task has been deleted ${req.params.id}`);
  } catch (error) {
    res.status(500).json({
      msg: error.message + `No id matches with this id ${req.params.id}`,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,   // the new sended data the has to be updated 
      {
        new: true,  // this to make a new entery to database
        runValidators: true,   // to run the required validatores in taskModel
      }
    );

    if (!updateTask) {
      res.status(404).json(" Something went wrong!!");
    }

    res.status(200).json(`The task has been updated now to ${updateTask}`);
  } catch (error) {
    res.status(500).json({
      msg: error.message + `, Something went wrong ${req.params.id}`,
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
