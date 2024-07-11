/* eslint-disable react/prop-types */
import * as mui from "@mui/material";

function WorkoutTemp({ workout }) {

  const handleClick = async () => {
    const response = await fetch(`http://localhost:4000/workouts/${workout._id}`,{
      method: "DELETE",
    }) 
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
  }


  return (
    <div className="h-[200px] w-[250px] flex flex-col bg-black border border-red-500 text-snowWhite items-center justify-center">
      <h4>{workout.title}</h4>
      <p>Load:{workout.weight}</p>
      <p>Sets:{workout.sets}</p>
      <p>Reps:{workout.reps}</p>
      <p>{workout.createdAt}</p>
      <mui.Button
            variant="contained"
            sx={{ margin: 1.5, height: 22, fontSize: "18px" }}
            onClick={handleClick}
          >
            DELETE
          </mui.Button>
    </div>
  );
}

export default WorkoutTemp;
