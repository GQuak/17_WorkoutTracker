//Require mongoose DB Node Module
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema for workouts
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Choose a type of excercise",
      },
      name: {
        type: String,
        required: "Enter a name",
      },
      duration: {
        type: Number,
        required: "Choose an duration",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

// Creating a workout model to export
const Workout = mongoose.model("Workout", workoutSchema);

// Export the model
module.exports = Workout;
