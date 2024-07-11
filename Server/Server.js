require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express");
const workoutsRoutes = require("./Routes/WorkoutRoutes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/workouts", workoutsRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & Server is running on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

