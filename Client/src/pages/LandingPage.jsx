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
      <div className="h-[110vh] w-full  bg-black">
        <section className="h-[52vh] w-full bg-snowWhite p-10 gap-24 flex items-center justify-center">
          <div className="h-[500px] w-[750px]  p-4 flex flex-col items-start justify-center">
            <h2 className="text-[50px] max-w-[700px] text-frenchBlue font-black mb-2">
              WELCOME TO FITRACK
            </h2>
            <p className="text-2xl max-w-[730px] text-russet font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur, justo a aliquet tincidunt, nunc nisl tincidunt
              tortor, id aliquet nunc turpis id nunc. Sed vitae ligula
              consectetur, lacinia nunc id, aliquet nunc. Nulla facilisi.
              Suspendisse potenti. Sed euismod, nisl nec aliquam tincidunt,
              mauris nunc luctus nunc, id lacinia nunc nisl ac nunc. Nulla
              facilisi. Sed euismod, nisl nec aliquam tincidunt, mauris nunc
              luctus nunc, id lacinia nunc nisl ac nunc.
            </p>
          </div>
          <div>
            <img
              src={about}
              alt="pic"
              className="rounded-3xl h-[400px] shadow-4xl"
            />
          </div>
        </section>

        <section className="h-[58vh] w-full bg-black flex items-center justify-center">
          <div className="h-[58vh] w-[1600px] gap-6 py-6 flex items-center justify-center">
            <div className="h-[100%] w-[25%] bg-slate-500"></div>
            <div className="h-[100%] w-[25%] bg-slate-200"></div>
            <div className="h-[100%] w-[25%] bg-slate-300"></div>
            <div className="h-[100%] w-[25%] bg-slate-400"></div>
          </div>
        </section>

        <section className="h-[100vh] w-full bg-frenchBlue items-start justify-center flex ">
          <div className="h-[60vh] w-full bg-black ">
            <h1 className="text-5xl pt-6 pb-4 text-white font-black flex items-start justify-center  ">
              CALCULATORS
            </h1>
            <div className="h-[50vh] w-full flex items-start justify-center gap-6 pb-4">
              <div className="h-[100%] w-[25%] bg-slate-500"></div>
              <div className="h-[100%] w-[25%] bg-slate-200"></div>
              <div className="h-[100%] w-[25%] bg-slate-300"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
