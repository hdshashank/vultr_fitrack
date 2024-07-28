// App.js
import axios from 'axios';
import {useState} from 'react';
import { useFormik } from 'formik';

const AI_Form = () => {
    const [responseData, setResponseData] = useState(null); // State to store response data

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      gender: '',
      weight: '',
      height: '',
      veg_or_nonveg: '',
      disease: '',
      region: '',
      state: '',
      allergics: '',
      foodtype: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:4000/api/recommendations', values);
        console.log(response.data);
        setResponseData(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div>
      <h1>Nutrition Planner</h1>
      <form onSubmit={formik.handleSubmit}>
        <input name="name" value={formik.values.name} onChange={formik.handleChange} placeholder="Name" />
        <input name="age" value={formik.values.age} onChange={formik.handleChange} placeholder="Age" />
        <input name="gender" value={formik.values.gender} onChange={formik.handleChange} placeholder="Gender" />
        <input name="weight" value={formik.values.weight} onChange={formik.handleChange} placeholder="Weight" />
        <input name="height" value={formik.values.height} onChange={formik.handleChange} placeholder="Height" />
        <input name="veg_or_nonveg" value={formik.values.veg_or_nonveg} onChange={formik.handleChange} placeholder="Dietary Preference" />
        <input name="disease" value={formik.values.disease} onChange={formik.handleChange} placeholder="Disease" />
        <input name="region" value={formik.values.region} onChange={formik.handleChange} placeholder="Region" />
        <input name="state" value={formik.values.state} onChange={formik.handleChange} placeholder="State" />
        <input name="allergics" value={formik.values.allergics} onChange={formik.handleChange} placeholder="Allergies" />
        <input name="foodtype" value={formik.values.foodtype} onChange={formik.handleChange} placeholder="Food Type" />
        <button type="submit">Get Recommendations</button>
      </form>

      {responseData && (
        <div className='w-[1000px]'>
          <h2>Recommendations</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre> {/* Display the response data */}
        </div>
      )}


    </div>
  );
};

export default AI_Form;
