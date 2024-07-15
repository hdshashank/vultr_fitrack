const mongoose = require("mongoose");

const schema = mongoose.Schema;

const workoutSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WorkoutCollection", workoutSchema);
