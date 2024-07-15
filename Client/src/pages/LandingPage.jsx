import HeroSlider from "../components/HeroSlider";
import { Link } from "react-router-dom";
import about from "../assets/pictures/about.jpg";

function LandingPage() {
  return (
    <>
      <div className="h-[93vh] w-full ">
        <HeroSlider />
        <div className="h-[500px] w-[1400px] bg-white bg-opacity-10 left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 absolute flex flex-col gap-8 items-center justify-center rounded-lg  backdrop-blur-md">
          <h1 className="text-9xl text-frenchBlue font-black">
            <Link to="/signup">JOIN US NOW!!</Link>
          </h1>
          <p className="text-4xl text-russet font-bold">
            <q>Unlock your true potential!!!</q>
          </p>
        </div>
      </div>
      <div className="h-[55vh] w-full  bg-black">
        <section className="h-[52vh] w-full bg-snowWhite p-10 gap-24 flex items-center justify-center">
          <div className="h-[500px] w-[750px]  p-4 flex flex-col items-start justify-center">
            <h2 className="text-[50px] max-w-[700px] text-frenchBlue font-black mb-2">
              WELCOME TO FITRACK
            </h2>
            <p className="text-2xl max-w-[730px] text-russet font-semibold">
            Welcome to FITRACK, your personal fitness companion! Customize your workout plans, track your progress, and achieve your fitness goals with ease. Our platform ensures that your data is securely stored and accessible only to you. Sign up today to start your fitness journey and take control of your health with tailored workout routines and detailed logging features. Let&apos;s get fit together!            </p>
          </div>
          <div>
            <img
              src={about}
              alt="pic"
              className="rounded-3xl h-[400px] shadow-4xl"
            />
          </div>
        </section>

     

        {/* <section className="h-[50vh] w-full bg-frenchBlue items-start justify-center flex ">
          <div className="h-[50vh] w-full bg-black ">
            <h1 className="text-5xl pt-6 pb-4 text-white font-black flex items-start justify-center  ">
              CALCULATORS
            </h1>
            <div className="h-[30vh] w-full flex items-start justify-center gap-6 pb-4">
            
              <div className="h-[100%] w-[25%] bg-snowWhite rounded-2xl flex flex-col  items-center justify-center ">
                <h1 className="text-4xl font-bold">BMI CALCULATOR</h1>
                <p className="w-[70%] font-sans font-bold text-center top-4 relative text-frenchBlue tracking-wider"> A tool to estimate body fat based on height and weight, categorizing individuals as underweight, normal weight, overweight, or obese.</p>
              </div>
              <div className="h-[100%] w-[25%] bg-snowWhite rounded-2xl flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">BMR CALCULATOR</h1>
                <p className="w-[70%] font-sans font-bold text-center top-4 relative text-frenchBlue tracking-wider">A calculator that estimates the number of calories required to maintain basic bodily functions at rest, based on age, gender, weight, and height.</p>
              </div>
              <div className="h-[100%] w-[25%] bg-snowWhite rounded-2xl flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">1RM CALCULATOR</h1>
                <p className="w-[70%] font-sans font-bold text-center top-4 relative text-frenchBlue tracking-wider"> A calculator used to estimate the maximum weight an individual can lift for one repetition of a given exercise, useful for designing strength training programs.</p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}

export default LandingPage;
