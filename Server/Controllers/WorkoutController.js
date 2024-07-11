const WorkoutCollection = require("../Models/WorkoutModel");
const mongoose = require("mongoose");

//get all workouts
const getAllWorkouts = async (req, res) => {
  const workouts = await WorkoutCollection.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

//get single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const workout = await WorkoutCollection.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "Workout not found" });
  }

  res.status(200).json(workout);
};

//create a workout
const createWorkout = async (req, res) => {
  const { title, reps, sets, weight } = req.body;

  try {
    const newWorkout = await Workout.create({ title, reps, sets, weight });
    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const workout = await WorkoutCollection.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "Workout not found" });
  }

  res.status(200).json(workout);
};

//update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }
  const workout = await WorkoutCollection.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(404).json({ error: "Workout not found" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
