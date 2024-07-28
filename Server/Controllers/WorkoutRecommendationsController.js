const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const getWorkoutPlan = async (req, res) => {
  const inputData = req.body;
  const prompt = `Think you are a fitness coach, given a person's age, gender, height, weight, fitness goals (e.g., weight loss, muscle gain, endurance, maintain weight), preferred workout types (e.g., cardio, strength training, flexibility, crossfit), days available for workouts. Please provide absolute results without mentioning the method. Please provide the results in plain JSON format without any additional text formatting or explanations.
  
  {
    "WeeklyWorkoutPlan": [
      {
        "Day": "Day of the week",
        "WorkoutType": "type",
        "Exercises": [
          {
            "Exercise": "name",
            "Sets": "number",
            "Reps": "number",
            "RestPeriod": "time"
          }
        ],
        "Duration": "total time in minutes",
        "CaloriesBurned": "estimated calories"
      }
    ]
  }
  Person age: ${inputData.age}
  Person gender: ${inputData.gender}
  Person weight: ${inputData.weight}
  Person height: ${inputData.height}
  Person fitnessGoal: ${inputData.fitnessGoal}
  Person daysAvailable: ${inputData.daysAvailable}
  Person workoutType: ${inputData.workoutType}.`;

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
module.exports = { getWorkoutPlan };
