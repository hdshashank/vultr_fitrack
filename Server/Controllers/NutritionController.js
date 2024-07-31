const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const getNutritionPlan = async (req, res) => {
    const inputData = req.body;
  const prompt = `Think you are a chef and fitness coach, given a person's age, gender, height, weight, dietary preferences (e.g., low-carb, high-protein), food type (e.g., vegetarian, vegan, omnivore), region, food allergy, activity level, fitness goal considering all the given inputs, provide the following information:a detailed diet plan including Total daily caloric intake, Caloric intake for each meal (breakfast, lunch, dinner, snacks), Macronutrient breakdown (carbohydrates, proteins, fats) for each meal, Specific food items and quantities (in grams) for each meal. Ensure that sum of calories of brekfast, lunch, dinner, snacks is equal to total daily caloric intake. calculate Total daily Engergy Expenditure from given inputs and based on the TDEE Provide the plan. Please provide absolute results without mentioning the method. Please provide the results in plain JSON format without any additional text formatting or explanations.
Go through the following to understand the expected output format:
{
  "TotalDailyCaloricIntake": "",
    "Breakfast": {
      "Calories": "",
      "Protein": "",
      "Carbs": "",
      "Fat": "",
      "Ingredients": { "item1": "quantity", "item2": "quantity", "item3": "quantity", "item4": "quantity" }
    },
    "Lunch": {
      "Calories": "",
      "Protein": "",
      "Carbs": "",
      "Fat": "",
      "Ingredients": { "item1": "quantity", "item2": "quantity", "item3": "quantity", "item4": "quantity" }
    },
    "Dinner": {
      "Calories": "",
      "Protein": "",
      "Carbs": "",
      "Fat": "",
      "Ingredients": { "item1": "quantity", "item2": "quantity", "item3": "quantity", "item4": "quantity" }
    },
    "Snacks": {
      "Calories": "",
      "Protein": "",
      "Carbs": "",
      "Fat": "",
      "Ingredients": { "item1": "quantity", "item2": "quantity", "item3": "quantity", "item4": "quantity" }
    }
  }

      Person age: ${inputData.age}
      Person gender: ${inputData.gender}
      Person weight: ${inputData.weight}
      Person height: ${inputData.height}
      Person dietaryPreferences: ${inputData.dietaryPreferences}
      Person activityLevel: ${inputData.activityLevel}
      Person fitnessGoal: ${inputData.fitnessGoal}
      Person region: ${inputData.region}
      Person allergies: ${inputData.allergies}
      Person foodtype: ${inputData.foodtype}.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    res.json(text);
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).send("Error generating recommendations");
  }
};


module.exports = { getNutritionPlan };