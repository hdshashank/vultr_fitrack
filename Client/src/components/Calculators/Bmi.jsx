import { useState } from 'react';

const Bmi = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');

    const calculateBmi = () => {
        if (weight && height) {
            const bmiValue = (weight / (height * height)).toFixed(2);
            setBmi(bmiValue);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center h-[500px] w-[500px] bg-snowWhite p-8 shadow-5xl rounded-2xl'>
            <h2 className="text-3xl font-semibold mb-8">BMI Calculator</h2>
            
            <div className="mb-3">
                <label className="block mb-2 text-xl font-medium text-gray-900">Height (m):</label>
                <input 
                    type="number" 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>
            <div className="mb-3">
                <label className="block mb-2 text-xl font-medium text-gray-900">Weight (kg):</label>
                <input 
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>
            <button 
                onClick={calculateBmi} 
                className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl  w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Calculate BMI
            </button>
            {bmi && <p className="mt-4 text-lg font-semibold">Your BMI is: <span className="text-blue-500">{bmi}</span></p>}
        </div>
    );
};

export default Bmi;