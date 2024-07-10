import  { useState } from 'react';

function Bmr() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [bmr, setBmr] = useState(null);

    const calculateBmr = () => {
        // BMR calculation logic based on weight, height, age, and gender
        let bmrValue = 0;
        if (gender === 'male') {
            bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
        }
        setBmr(bmrValue);
    };

    return (
        <div className='h-[500px] w-[500px] bg-snowWhite'>
            <h2>BMR Calculator</h2>
            <div>
                <label>Weight (in kg):</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>Height (in cm):</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <label>Gender:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <button onClick={calculateBmr}>Calculate BMR</button>
            {bmr !== null && <p>Your BMR is: {bmr}</p>}
        </div>
    );
}

export default Bmr;
