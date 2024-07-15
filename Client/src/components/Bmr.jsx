import { useState } from "react";

function Bmr() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmr, setBmr] = useState(null);

  const calculateBmr = () => {
    let bmrValue = 0;
    if (gender === "male") {
      bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    setBmr(bmrValue);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[600px] w-[500px] bg-snowWhite p-8 drop-shadow-md rounded-2xl">
      <h2 className="text-3xl font-semibold mb-8">BMR Calculator</h2>
      <div className="mb-3">
        <label className="block mb-2 text-xl font-medium text-gray-900">
          Weight (in kg):
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-xl font-medium text-gray-900">
          Height (in cm):
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-xl font-medium text-gray-900">
          Age:
        </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-xl font-medium text-gray-900">
          Gender:
        </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button
        onClick={calculateBmr}
        className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Calculate BMR
      </button>
      {bmr !== null && (
        <p className="mt-4 text-lg font-semibold">
          Your BMR is: <span className="text-blue-500">{bmr}</span>
        </p>
      )}
    </div>
  );
}

export default Bmr;
