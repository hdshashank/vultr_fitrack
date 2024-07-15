/* eslint-disable react/prop-types */


const NutritionPlan = ({ plan }) => {
  return (
    <div className="space-y-3 mt-2 ml-8">
      <h2 className="font-black text-4xl tracking-wider" > Nutrition Plan</h2>
      <p className="font-bold text-2xl">Total Daily Calories: {plan.totalDailyCalories}</p>

      {Object.keys(plan.meals).map(meal => (
        <div key={meal}>
          <h3 className="font-black text-frenchBlue text-2xl">{meal.charAt(0).toUpperCase() + meal.slice(1)}</h3>
          <p className="font-bold tracking-wider">Total Calories: {plan.meals[meal].totalCalories}</p>
          <ul className="font-semibold text-black tracking-wider">
            {plan.meals[meal].items.map((item, index) => (
              <li key={index}>
                {item.item}: {item.calories} kcal ({item.grams}g)
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NutritionPlan;
