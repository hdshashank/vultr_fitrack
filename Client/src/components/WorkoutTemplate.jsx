// /* eslint-disable react/prop-types */
// import * as mui from "@mui/material";
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
// import { useAuthContext } from '../hooks/useAuthContext'


// function WorkoutTemp({ workout }) {
//   const { dispatch } = useWorkoutsContext()
//   const { user } = useAuthContext()


//   const handleClick = async () => {
//     if (!user) {
//       return
//     }

//     const response = await fetch(`http://localhost:4000/workouts/${workout._id}`,{
//       method: "DELETE",
//       headers: {
//         'Authorization': `Bearer ${user.token}`
//       }
//     }) 
//     const json = await response.json();

//     if (response.ok) {
//       dispatch({type: 'DELETE_WORKOUT', payload: json})
//       window.location.reload()
//     }
//   }


//   return (
//     <div className="h-[200px] w-[250px] flex flex-col bg-black border border-red-500 text-snowWhite items-center justify-center">
//       <h4>{workout.title}</h4>
//       <p>Load:{workout.weight}</p>
//       <p>Sets:{workout.sets}</p>
//       <p>Reps:{workout.reps}</p>
//       <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
//       <mui.Button
//             variant="contained"
//             sx={{ margin: 1.5, height: 22, fontSize: "18px" }}
//             onClick={handleClick}
//           >
//             DELETE
//           </mui.Button>
//     </div>
//   );
// }

// export default WorkoutTemp;
