import { useState } from 'react';

const Onerm = () => {
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');
    const [oneRepMax, setOneRepMax] = useState('');

    const calculateOneRepMax = () => {
        if (weight && reps) {
            const calculatedMax = Math.round(weight * (1 + reps / 30));
            setOneRepMax(calculatedMax);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center h-[500px] w-[500px] bg-snowWhite p-8 shadow-5xl rounded-2xl'>
            <h1 className="text-3xl font-semibold mb-8">One Rep Max Calculator</h1>
            <div className="mb-3">
                <label className="block mb-2 text-xl font-medium text-gray-900">Weight (in kg):</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>
            <div className="mb-3">
                <label className="block mb-2 text-xl font-medium text-gray-900">Reps:</label>
                <input
                    type="number"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>
            <button 
                onClick={calculateOneRepMax} 
                className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Calculate 1RM
            </button>
            {oneRepMax && <p className="mt-4 text-lg font-semibold">Your One Rep Max is: <span className="text-blue-500">{oneRepMax}</span> kg</p>}
        </div>
    );
};

export default Onerm;