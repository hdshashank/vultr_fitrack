import  { useState } from 'react';

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
        <div className='h-[500px] w-[500px] bg-snowWhite'>
            <h2>BMI Calculator</h2>
            <div>
                <label>Weight (kg):</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>Height (m):</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            {bmi && <p>Your BMI is: {bmi}</p>}
        </div>
    );
};

export default Bmi;