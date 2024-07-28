const { getWorkoutPlan } = require("../Controllers/WorkoutRecommendationsController");

const express = require("express");

const router = express.Router();

router.post("/", getWorkoutPlan);

module.exports = router;
