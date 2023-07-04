const express = require("express");
const Task = require("../models/taskModel");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const router = express.Router();


router.post("/api/task", createTask);
router.get("/api/tasks", getTasks);
router.get("/api/getTask/:id", getTask);
router.delete("/api/deleteTask/:id", deleteTask);
router.put("/api/updateTask/:id", updateTask);

module.exports = router;
