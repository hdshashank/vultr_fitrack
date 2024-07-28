require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const workoutsRoutes = require("./Routes/WorkoutRoutes");
const userRoutes = require("./Routes/UserRoutes");
const nutritionRoutes = require("./Routes/NutritionRoutes");
const workoutRecommendationsRoutes = require("./Routes/WorkoutRecommendationsRoutes")

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/workouts", workoutsRoutes);
app.use("/user", userRoutes);
app.use("/nutrition", nutritionRoutes);
app.use("/workout/recommendations", workoutRecommendationsRoutes)


// Connect to DB
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
