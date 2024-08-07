/* eslint-disable react/prop-types */

const NutritionPlan = ({ plan }) => {
  return (
    <div className=" flex flex-col items-center ">
      <h2 className="tracking-wider text-3xl font-bold text-frenchBlue p-2">
        {" "}
        Nutrition Plan
      </h2>
      <div className=" flex flex-col h-[790px] w-[450px] items-start justify-evenly gap-x-6">
        <p className="font-bold text-xl text-black leading-7 ">
          <span className="text-black">Total Daily Calories</span>
          <br />
          <span className="text-frenchBlue">
            {plan.TotalDailyCaloricIntake} kcal
          </span>
        </p>

        <div className="font-bold text-xl ">
          <span className="">Breakfast</span>
          <br />
          <ul className="flex text-lg gap-4 mt-1 text-frenchBlue ">
            <span className="leading-5  tracking-wider">
              Calories
              <br />
              {plan.Breakfast.Calories}
            </span>
            <span className="leading-5  tracking-wider">
              Protein
              <br />
              {plan.Breakfast.Protein}
            </span>
            <span className="leading-5  tracking-wider">
              Carbs
              <br />
              {plan.Breakfast.Carbs}
            </span>
            <span className="leading-5  tracking-wider">
              Fat
              <br />
              {plan.Breakfast.Fat}
            </span>
          </ul>
          <hr className="border-none bg-black h-0.5 w-[425px] mt-1" />
          <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-1 text-frenchBlue ">
            {Object.entries(plan.Breakfast.Ingredients).map(([key, value]) => (
              <li key={key} className="text-xl leading-6">
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="font-bold text-xl ">
          <span className="">Lunch</span>
          <br />
          <ul className="flex text-lg gap-4 mt-1 text-frenchBlue ">
            <span className="leading-5  tracking-wider">
              Calories
              <br />
              {plan.Lunch.Calories}
            </span>
            <span className="leading-5  tracking-wider">
              Protein
              <br />
              {plan.Lunch.Protein}
            </span>
            <span className="leading-5  tracking-wider">
              Carbs
              <br />
              {plan.Lunch.Carbs}
            </span>
            <span className="leading-5  tracking-wider">
              Fat
              <br />
              {plan.Lunch.Fat}
            </span>
          </ul>
          <hr className="border-none bg-black h-0.5 w-[425px] mt-1" />
          <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-1 text-frenchBlue ">
            {Object.entries(plan.Lunch.Ingredients).map(([key, value]) => (
              <li key={key} className="text-xl leading-6">
                {key}
                <br />
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="font-bold text-xl ">
          <span className="">Dinner</span>
          <br />
          <ul className="flex text-lg gap-4 mt-1 text-frenchBlue ">
            <span className="leading-5  tracking-wider">
              Calories
              <br />
              {plan.Dinner.Calories}
            </span>
            <span className="leading-5  tracking-wider">
              Protein
              <br />
              {plan.Dinner.Protein}
            </span>
            <span className="leading-5  tracking-wider">
              Carbs
              <br />
              {plan.Dinner.Carbs}
            </span>
            <span className="leading-5  tracking-wider">
              Fat
              <br />
              {plan.Dinner.Fat}
            </span>
          </ul>
          <hr className="border-none bg-black h-0.5 w-[425px] mt-1" />
          <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-1 text-frenchBlue ">
            {Object.entries(plan.Dinner.Ingredients).map(([key, value]) => (
              <li key={key} className="text-xl leading-6">
                {key}
                <br />
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="font-bold text-xl ">
          <span className="">Snacks</span>
          <br />
          <ul className="flex text-lg gap-4 mt-1 text-frenchBlue ">
            <span className="leading-5  tracking-wider">
              Calories
              <br />
              {plan.Snacks.Calories}
            </span>
            <span className="leading-5  tracking-wider">
              Protein
              <br />
              {plan.Snacks.Protein}
            </span>
            <span className="leading-5  tracking-wider">
              Carbs
              <br />
              {plan.Snacks.Carbs}
            </span>
            <span className="leading-5  tracking-wider">
              Fat
              <br />
              {plan.Snacks.Fat}
            </span>
          </ul>
          <hr className="border-none bg-black h-0.5 w-[425px] mt-1" />
          <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-1 text-frenchBlue ">
            {Object.entries(plan.Snacks.Ingredients).map(([key, value]) => (
              <li key={key} className="text-xl leading-6">
                {key}:                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NutritionPlan;
