import dietPlan from "../components/Nutrition/dietPlan.json";
import NutritionPlan from "./NutritionPlan";

import React, { useState } from "react";

function NutritionForm() {
  const [userInput, setUserInput] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "",
    activityLevel: "",
    fitnessGoal: "",
  });
  const [nutritionPlan, setNutritionPlan] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const generateNutritionPlan = () => {
    const { height, weight, age, gender, activityLevel, fitnessGoal } =
      userInput;
    let bmr;

    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityFactor;
    switch (activityLevel) {
      case "sedentary":
        activityFactor = 1.2;
        break;
      case "light":
        activityFactor = 1.375;
        break;
      case "moderate":
        activityFactor = 1.55;
        break;
      case "active":
        activityFactor = 1.725;
        break;
      case "very active":
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1;
    }

    const maintenanceCalories = bmr * activityFactor;
    let caloricIntake;
    if (fitnessGoal === "lose weight") {
      caloricIntake = maintenanceCalories - 500;
    } else if (fitnessGoal === "gain muscle") {
      caloricIntake = maintenanceCalories + 500;
    } else {
      caloricIntake = maintenanceCalories;
    }

    const totalCalories = Math.round(caloricIntake);

    const plan = {
      totalDailyCalories: totalCalories,
      meals: {
        breakfast: {
          totalCalories: Math.round(totalCalories * 0.25),
          items: calculateMealItems(totalCalories * 0.25, [
            { item: "Oatmeal", calories: 150, grams: 150 },
            { item: "Greek Yogurt", calories: 100, grams: 100 },
            { item: "Banana", calories: 90, grams: 120 },
            { item: "Almonds", calories: 100, grams: 25 },
          ]),
        },
        lunch: {
          totalCalories: Math.round(totalCalories * 0.35),
          items: calculateMealItems(totalCalories * 0.35, [
            { item: "Grilled Chicken Breast", calories: 220, grams: 200 },
            { item: "Quinoa", calories: 220, grams: 150 },
            { item: "Mixed Vegetable Salad", calories: 100, grams: 250 },
          ]),
        },
        dinner: {
          totalCalories: Math.round(totalCalories * 0.35),
          items: calculateMealItems(totalCalories * 0.35, [
            { item: "Salmon", calories: 250, grams: 200 },
            { item: "Brown Rice", calories: 150, grams: 150 },
            { item: "Steamed Broccoli", calories: 50, grams: 150 },
          ]),
        },
        snacks: {
          totalCalories: Math.round(totalCalories * 0.05),
          items: calculateMealItems(totalCalories * 0.05, [
            { item: "Apple", calories: 80, grams: 150 },
            { item: "Peanut Butter", calories: 100, grams: 30 },
          ]),
        },
      },
    };

    setNutritionPlan(plan);
  };

  const calculateMealItems = (totalMealCalories, items) => {
    const totalItemCalories = items.reduce(
      (total, item) => total + item.calories,
      0
    );
    const factor = totalMealCalories / totalItemCalories;
    return items.map((item) => ({
      ...item,
      calories: Math.round(item.calories * factor),
      grams: Math.round(item.grams * factor), // Scale grams based on the factor
    }));
  };

  return (
    <>
      <div className="flex items-center justify-center w-[70%]  h-[500px]">
        <div className="w-[400px]  p-6 bg-snowWhite rounded-tl-lg rounded-bl-lg shadow-md h-[750px] flex flex-col items-center justify-start ">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 tracking-wider">
            Generate Nutrition Plan
          </h1>
          <form
            className="bg-transparent h-[700px] w-[300px] flex flex-col justify-evenly"
            onSubmit={(e) => {
              e.preventDefault();
              generateNutritionPlan();
            }}
          >
            <div>
              <label className="block text-xl font-medium text-gray-700">
                Height (cm):
                <input
                  type="number"
                  name="height"
                  value={userInput.height}
                  onChange={handleChange}
                  required
                  className="mt-3 block w-full rounded-md border-gray-300 bg-white p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-700">
                Weight (kg):
                <input
                  type="number"
                  name="weight"
                  value={userInput.weight}
                  onChange={handleChange}
                  required
                  className="mt-3 block w-full rounded-md bg-white p-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-700">
                Age:
                <input
                  type="number"
                  name="age"
                  value={userInput.age}
                  onChange={handleChange}
                  required
                  className="mt-3 block p-2  w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-700">
                Gender:
                <select
                  name="gender"
                  value={userInput.gender}
                  onChange={handleChange}
                  required
                  className="mt-3 block p-2 w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-700">
                Activity Level:
                <select
                  name="activityLevel"
                  value={userInput.activityLevel}
                  onChange={handleChange}
                  required
                  className="mt-3 block p-2  w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Select Activity Level</option>
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Light</option>
                  <option value="moderate">Moderate</option>
                  <option value="active">Active</option>
                  <option value="very active">Very Active</option>
                </select>
              </label>
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-700">
                Fitness Goal:
                <select
                  name="fitnessGoal"
                  value={userInput.fitnessGoal}
                  onChange={handleChange}
                  required
                  className="mt-3 block p-2  w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Select Goal</option>
                  <option value="maintain">Maintain Weight</option>
                  <option value="lose weight">Lose Weight</option>
                  <option value="gain muscle">Gain Muscle</option>
                </select>
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-4 flex items-center justify-center border border-transparent rounded-md shadow-sm text-2xl font-medium text-white bg-frenchBlue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Generate Plan
            </button>
          </form>
        </div>
        <div className="bg-snowWhite w-[500px]  p-6 rounded-tr-lg rounded-br-lg shadow-md h-[750px] flex items-center ">
          {nutritionPlan && <NutritionPlan plan={nutritionPlan} />}
        </div>
      </div>
    </>
  );
}

export default NutritionForm;
