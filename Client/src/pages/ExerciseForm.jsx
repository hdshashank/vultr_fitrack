/* eslint-disable no-unused-vars */

import { useState } from "react";
import * as mui from "@mui/material";
import WorkoutPlan from "./WorkoutPlan";

function ExerciseForm() {
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [showResult, setShowResult] = useState("hidden");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [workoutType, setWorkoutType] = useState("");
  const [daysAvail, setDaysAvail] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const gen = [
    {
      value: "male",
      label: "MALE",
    },
    {
      value: "female",
      label: "FEMALE",
    },
  ];

  const workTyp = [
    {
      value: "cardio",
      label: "Cardio",
    },
    {
      value: "strength-training",
      label: "Strength-Training",
    },
    {
      value: "power-lifting",
      label: "Power-Lifting",
    },
    {
      value: "crossfit",
      label: "Crossfit",
    },
    {
      value: "hiit",
      label: "HIIT",
    },
  ];

  const fitGoal = [
    {
      value: "muscle-gain",
      label: "Muscle Gain",
    },
    {
      value: "weight-loss",
      label: "Weight Loss",
    },
    {
      value: "maintain",
      label: "Maintain",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !height ||
      !weight ||
      !age ||
      !gender ||
      !workoutType ||
      !fitnessGoal ||
      !daysAvail 
    ) {
      setError("Please fill in all fields");
      return;
    }

    const values = {
      height,
      weight,
      age,
      gender,
      workoutType,
      fitnessGoal,
      daysAvail,
    };
    const response = await fetch(
      "http://localhost:4000/workout/recommendations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    if (!response.ok) {
      setError(result.error);
      setEmptyFields(result.emptyFields);
    }

    const result = await response.json();
    console.log(values);
    console.log(result);
    console.log(workoutPlan);
    setWorkoutPlan(result);

    setShowResult("block");

    
    
    
  };
  return (
    <>
      <div className="flex items-center justify-center w-full h-full my-4">
        <div
          className={`w-[500px] bg-snowWhite shadow-5xl h-[800px] flex flex-col items-center ${
            showResult == "block" ? "rounded-tl-xl rounded-bl-xl" : "rounded-xl"
          }`}
        >
          <h1 className="text-3xl font-bold text-frenchBlue pt-8">
            Generate Nutrition Plan
          </h1>
          <div className=" h-full w-full  flex flex-col items-center justify-center ">
            <mui.FormControl className="flex h-[700px] w-[375px] justify-evenly ">
              <mui.TextField
                label="Height (cm)"
                variant="outlined"
                type="number"
                InputProps={{
                  inputProps: { min: 0 },
                }}
                onChange={(e) => setHeight(e.target.value)}
                value={height}
                name="height"
              />

              <mui.TextField
                label="Weight (kg)"
                variant="outlined"
                type="number"
                InputProps={{
                  inputProps: { min: 0 },
                }}
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                name="weight"
              />

              <mui.TextField
                label="Age"
                variant="outlined"
                type="number"
                InputProps={{
                  inputProps: { min: 0 },
                }}
                onChange={(e) => setAge(e.target.value)}
                value={age}
                name="age"
              />

              <mui.TextField
                select
                label="Gender"
                onChange={(e) => setGender(e.target.value)}
              >
                {gen.map((option) => (
                  <mui.MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </mui.MenuItem>
                ))}
              </mui.TextField>

              <mui.TextField
                select
                label="Workout Type"
                onChange={(e) => setWorkoutType(e.target.value)}
              >
                {workTyp.map((option) => (
                  <mui.MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </mui.MenuItem>
                ))}
              </mui.TextField>

              <mui.TextField
                select
                label="Fitness Goal"
                onChange={(e) => setFitnessGoal(e.target.value)}
              >
                {fitGoal.map((option) => (
                  <mui.MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </mui.MenuItem>
                ))}
              </mui.TextField>

              

             
              <mui.TextField
                label="Days Available"
                variant="outlined"
                onChange={(e) => setDaysAvail(e.target.value)}
                value={daysAvail}
                name="allergies"
              />

              

              <mui.Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ height: 42, fontSize: "18px", fontWeight: "bold" }}
              >
                Add Workout
              </mui.Button>
            </mui.FormControl>
          </div>
        </div>

        <div
          className={`${
            showResult == "block"
              ? "bg-snowWhite w-[1200px] rounded-tr-lg rounded-br-lg shadow-5xl h-[800px] flex justify-center"
              : "hidden"
          }`}
        >
          {workoutPlan && <WorkoutPlan plan={JSON.parse(workoutPlan)} />}
        </div>
      </div>
    </>
  );
}

export default ExerciseForm;