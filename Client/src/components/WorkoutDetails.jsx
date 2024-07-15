/* eslint-disable react/prop-types */
import * as mui from "@mui/material";
import { useState } from "react";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
 

  const handleClick = async () => {
    if (!user) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4000/workouts/${workout._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_WORKOUT", payload: json });
        setSnackbarOpen(true); // This should open the Snackbar
      } else {
        throw new Error("Failed to delete workout");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
        <div className="h-[250px] w-[250px] p-5 flex flex-col bg-white relative text-black items-center justify-evenly space-y-2 rounded-2xl drop-shadow-md">
            <h4 className="text-lg font-semibold font-mono">{workout.title}</h4>
            <p className="font-mono">Sets: {workout.sets}</p>
            <p className="font-mono">Reps: {workout.reps}</p>
            <p className="font-mono">Load: {workout.weight}kg</p>

            {/* Uncomment to use when date formatting function is available */}
            {/* <p className="text-sm font-mono">Logged {formatDistanceToNow(new Date(workout.date))} ago</p> */}
            <mui.Button
              variant="contained"
              sx={{
                bgcolor: 'gray.700',
                '&:hover': { bgcolor: 'gray.800' },
                boxShadow: 'inset 0 -4px rgba(0,0,0,0.2)',
                margin: 1.5,
                height: 32,
                width: 100,
                fontSize: "16px",
                fontFamily: 'monospace',
                color: 'white',
                padding: '0 12px'
              }}
              onClick={handleClick}
            >
              DELETE
            </mui.Button>
            <mui.Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={() => setSnackbarOpen(false)}
              message="Workout deleted"
            />
        </div>
    </>
  );
}

export default WorkoutDetails;
