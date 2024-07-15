/* eslint-disable react/prop-types */

const WorkoutPlan = ({ plan }) => {
  return (
    <div className="space-y-3 mt-2 ml-8">
      <h2 className="font-bold text-4xl tracking-wider">Workout Plan</h2>
      {plan.days.map((day, index) => (
        <div key={index}>
          <h3 className="font-black text-frenchBlue text-2xl ">{day.day}</h3>
          <p className="font-semibold text-black tracking-wider">Exercise: {day.exercise}</p>
          <p className="font-semibold text-black tracking-wider">Duration: {day.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutPlan;
