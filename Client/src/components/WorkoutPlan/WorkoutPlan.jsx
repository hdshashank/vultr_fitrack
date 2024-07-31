/* eslint-disable react/prop-types */

const WorkoutPlan = ({ plan }) => {
  return (
    <div className="space-y-3 mt-2 ml-8">
      <h2 className="font-bold text-4xl tracking-wider">Workout Plan</h2>
      <p className="font-bold text-2xl">
        Total Daily Calories: {plan.WeeklyWorkoutPlan[0].Day} kcal
      </p>
      <p className="font-bold text-2xl">
        Breakfast: {plan.WeeklyWorkoutPlan[1].Day} kcal
      </p>
      <p className="font-bold text-2xl">Snacks: {plan.WeeklyWorkoutPlan[0].WorkoutType} kcal</p>
    </div>
  );
};
export default WorkoutPlan;
