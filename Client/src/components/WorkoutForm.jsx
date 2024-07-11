import { useState } from "react";
import * as mui from "@mui/material";

function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, reps, sets, weight };
    const response = await fetch("http://localhost:4000/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setReps("");
      setSets("");
      setWeight("");
      setError(null);
      console.log("Workout Added Successfully"), json;
    }
  };

  return (
    <div>
      <div className="h-[450px] w-[400px] bg-snowWhite flex items-center justify-center">
        <mui.FormControl sx={{ width: "55ch" }}>
          <mui.TextField
            label="Exercise Title"
            variant="outlined"
            type="text"
            sx={{ margin: 1 }}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <mui.TextField
            label="Reps"
            variant="outlined"
            type="number"
            sx={{ margin: 1 }}
            onChange={(e) => setReps(e.target.value)}
            value={reps}
          />
          <mui.TextField
            label="Sets"
            variant="outlined"
            type="number"
            sx={{ margin: 1 }}
            onChange={(e) => setSets(e.target.value)}
            value={sets}
          />
          <mui.TextField
            label="Weight"
            variant="outlined"
            type="number"
            sx={{ margin: 1 }}
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
          />
          <mui.Button
            variant="contained"
            sx={{ margin: 2.5, height: 42, fontSize: "18px" }}
            onClick={handleSubmit}
          >
            Add Workout
          </mui.Button>
          {error && (
            <p className="bg-red-200 rounded-md border-2 relative  border-red-700 w-[350px] p-2">
              {error}
            </p>
          )}
        </mui.FormControl>
      </div>
    </div>
  );
}

export default WorkoutForm;
