import  { useState } from 'react';

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
        <div className='h-[500px] w-[500px] bg-snowWhite'>
            <h1>One Rep Max Calculator</h1>
            <div>
                <label>Weight (in kg):</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div>
                <label>Reps:</label>
                <input
                    type="number"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                />
            </div>
            <button onClick={calculateOneRepMax}>Calculate</button>
            {oneRepMax && <p>Your One Rep Max is: {oneRepMax} kg</p>}
        </div>
    );
};

export default Onerm;