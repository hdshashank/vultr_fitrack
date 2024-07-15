import { useState } from "react";
import WorkoutPlan from "./WorkoutPlan";
import * as mui from "@mui/material";

function ExerciseForm() {
  const [userInput, setUserInput] = useState({
    height: "",
    weight: "",
    fitnessGoal: "",
  });

  const [workoutPlan, setWorkoutPlan] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const generateWorkoutPlan = () => {
    const { height, weight, fitnessGoal } = userInput;
    // Logic to generate workout plan based on inputs
    let plan;
    if (fitnessGoal === "maintain") {
      plan = {
        days: [
          {
            day: "Monday",
            exercise: "Cardio and Full Body Workout",
            duration: "1 hour",
          },
          {
            day: "Tuesday",
            exercise: "Rest or Light Activity",
            duration: "30 minutes",
          },
          {
            day: "Wednesday",
            exercise: "Upper Body Strength Training",
            duration: "1 hour",
          },
          {
            day: "Thursday",
            exercise: "Cardio and Core Workout",
            duration: "1 hour",
          },
          {
            day: "Friday",
            exercise: "Lower Body Strength Training",
            duration: "1 hour",
          },
          {
            day: "Saturday",
            exercise: "Cardio and Flexibility Training",
            duration: "1 hour",
          },
          {
            day: "Sunday",
            exercise: "Rest or Light Activity",
            duration: "30 minutes",
          },
        ],
      };
    } else if (fitnessGoal === "lose weight") {
      plan = {
        days: [
          {
            day: "Monday",
            exercise: "High-Intensity Interval Training (HIIT)",
            duration: "1 hour",
          },
          {
            day: "Tuesday",
            exercise: "Strength Training and Cardio",
            duration: "1 hour",
          },
          {
            day: "Wednesday",
            exercise: "Rest or Light Activity",
            duration: "30 minutes",
          },
          {
            day: "Thursday",
            exercise: "HIIT and Core Workout",
            duration: "1 hour",
          },
          {
            day: "Friday",
            exercise: "Strength Training and Cardio",
            duration: "1 hour",
          },
          {
            day: "Saturday",
            exercise: "Long Cardio Session (Running/Biking)",
            duration: "1.5 hours",
          },
          {
            day: "Sunday",
            exercise: "Rest or Light Activity",
            duration: "30 minutes",
          },
        ],
      };
    } else if (fitnessGoal === "gain muscle") {
      plan = {
        days: [
          {
            day: "Monday",
            exercise: "Upper Body Strength Training",
            duration: "1.5 hours",
          },
          {
            day: "Tuesday",
            exercise: "Lower Body Strength Training",
            duration: "1.5 hours",
          },
          {
            day: "Wednesday",
            exercise: "Rest or Light Activity",
            duration: "30 minutes",
          },
          {
            day: "Thursday",
            exercise: "Upper Body Strength Training",
            duration: "1.5 hours",
          },
          {
            day: "Friday",
            exercise: "Lower Body Strength Training",
            duration: "1.5 hours",
          },
          {
            day: "Saturday",
            exercise: "Full Body Workout",
            duration: "1 hour",
          },
          {
            day: "Sunday",
            exercise: "Rest or Light Activity",
            duration: "30 minutes",
          },
        ],
      };
    }

    setWorkoutPlan(plan);
  };

  return (
    <>
      <div className="flex items-center justify-center w-[70%] relative left-[50%] top-[25%] -translate-x-[50%] h-[500px] ">
        <div className="w-[400px]  p-6 bg-snowWhite rounded-tl-lg rounded-bl shadow-md h-[750px] flex flex-col items-center justify-center space-x-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 tracking-wider">Generate Workout Plan</h2>
          <form className="bg-transparent h-[400px] w-[300px] flex flex-col justify-evenly">
            <div>
              <label className="block text-xl font-medium text-gray-700">
                Height (cm):
                <input
                  type="number"
                  name="height"
                  value={userInput.height}
                  onChange={handleChange}
                  required
                  className="mt-3 block w-full p-2 rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-700">
                Weight (kg):
                <input
                  type="number"
                  name="weight"
                  value={userInput.weight}
                  onChange={handleChange}
                  required
                  className="mt-3 block w-full p-2 rounded-md  bg-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-700">
                Fitness Goal:
                <select
                  name="fitnessGoal"
                  value={userInput.fitnessGoal}
                  onChange={handleChange}
                  required
                  className="mt-3 block w-full p-2 rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Select Goal</option>
                  <option value="maintain">Maintain Weight</option>
                  <option value="lose weight">Lose Weight</option>
                  <option value="gain muscle">Gain Muscle</option>
                </select>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-frenchBlue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={(e) => {
                e.preventDefault();
                generateWorkoutPlan();
              }}
            >
              Generate Plan
            </button>
          </form>
        </div>
        <div className="bg-snowWhite w-[500px]  p-6 rounded-tr-lg rounded-br-lg shadow-md h-[750px]">
          {workoutPlan && <WorkoutPlan plan={workoutPlan} />}
        </div>
      </div>
    </> 
  );
}

export default ExerciseForm;
