const { getNutritionPlan } = require("../Controllers/NutritionController");

const express = require("express");

const router = express.Router();

router.post("/recommendations", getNutritionPlan);

module.exports = router;
