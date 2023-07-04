// route file
// git init
//express server

// import mongo module
//const connectDB = require("./config/connectDB");

require("dotenv").config(); // this in order to get into .env file, and without it u will not works (process.env....)
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

//Middleware
//enable the application to automatically parse JSON data sent in the request body,
// making it accessible for further processing within your application's routes and handlers.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//or this means that please(backend) only accept requests from this frontend url-(this origins ) below
app.use(
  cors({
    origin: ["http://localhost:3000", "http://mern-stack-app.onrender.com"],
  })
); // allow your Express.js application to respond to requests from different-(origins(url)),
// such as requests from web browsers running on different domains.

app.use(taskRoutes);

// const logger = (req, res, next) => {
//   console.log("Middleware is running");
//   console.log(req.method);

//   next();
// };

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

//Route
app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 5000;

//
/*
const startServer = async () => {
  try {

    // starting the connection with database first 
    await connectDB();

    // then starting the server 
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();*/
