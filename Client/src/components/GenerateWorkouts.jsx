import  { useState } from 'react';

const GenerateWorkouts = () => {
  // State to hold user inputs
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [experience, setExperience] = useState('');

  // State for displaying the workout plan
  const [workoutPlan, setWorkoutPlan] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Logic to determine workout plan based on inputs (example logic)
    // Replace this with your actual logic to generate workout plan
    let generatedWorkoutPlan = `Workout plan for: Height - ${height}, Weight - ${weight}, Age - ${age}, Fitness Goal - ${fitnessGoal}, Experience - ${experience}`;
    
    // Set the generated workout plan to state
    setWorkoutPlan(generatedWorkoutPlan);
  };

  return (
    <div>
      <h2>Workout Planner</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Fitness Goal:
          <select
            value={fitnessGoal}
            onChange={(e) => setFitnessGoal(e.target.value)}
            required
          >
            <option value="">Select goal</option>
            <option value="Weight loss">Weight loss</option>
            <option value="Muscle gain">Muscle gain</option>
            <option value="Fitness maintenance">Fitness maintenance</option>
          </select>
        </label>
        <br />
        <label>
          Experience Level:
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          >
            <option value="">Select experience</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>
        <br />
        <button type="submit">Generate Workout Plan</button>
      </form>

      {/* Display generated workout plan */}
      {workoutPlan && (
        <div>
          <h3>Generated Workout Plan:</h3>
          <p>{workoutPlan}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateWorkouts;
