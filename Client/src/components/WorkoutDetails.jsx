import { useEffect, useState } from "react";
import WorkoutTemp from "./WorkoutTemplate";

function WorkoutForm() {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:4000/workouts");
        console.log(response);
        const data = await response.json();
        if (response.ok) {
          setWorkouts(data);
        }
      } catch (error) {
        console.error("Failed to fetch :", error);
      }
    };

    fetchWorkouts();
  }, []);
  return (
    <div className="flex gap-10">
      {workouts &&
        workouts.map((workout) => (
          <WorkoutTemp key={workout._id} workout={workout} />
        ))}
    </div>
  );
}

export default WorkoutForm;
