const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const getWorkoutPlan = async (req, res) => {
  const inputData = req.body;
  const prompt = `Think you are a fitness coach, given a person's age, gender, height, weight, fitness goals (e.g., weight loss, muscle gain, endurance, maintain weight), preferred workout types (e.g., cardio, strength training, flexibility, crossfit).Provide a 5 day workout split plan containing 4 exercises for each day based on the input parameters. Please provide absolute results without mentioning the method. Please provide the results in plain JSON format without any additional text formatting or explanations.
  Go through the following to understand the expected output format:
  {
    "Day1" : {
      "Exercise1": 
          {
            "ExerciseName": "",
            "Sets": "",
            "Reps": "",
            "Rest": ""
          },
      "Exercise2": 
          {
            "ExerciseName": "",
            "Sets": "",
            "Reps": "",
            "Rest": ""
          },
      and so on for Exercise3, Exercise4.
    },
    "Day2" : {
      "Exercise1": 
          {
            "ExerciseName": "",
            "Sets": "",
            "Reps": "",
            "Rest": ""
          },
      "Exercise2": 
          {
            "ExerciseName": "",
            "Sets": "",
            "Reps": "",
            "Rest": ""
          },
      and so on for Exercise3, Exercise4.
    },
    and so on for Day3, Day4, Day5.
  }
    If it is a rest day then return in the following format.
    {
      "Day": "Rest"
    }
    
    

  Person age: ${inputData.age}
  Person gender: ${inputData.gender}
  Person weight: ${inputData.weight}
  Person height: ${inputData.height}
  Person fitnessGoal: ${inputData.fitnessGoal}
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
