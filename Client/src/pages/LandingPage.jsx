import Slider from "../components/Slider";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="h-[2000px] w-full ">
      <Slider />
      <div className="h-[500px] w-[1400px] bg-white bg-opacity-10 left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 absolute flex flex-col gap-8 items-center justify-center rounded-lg  backdrop-blur-md">
        <h1 className="text-9xl text-frenchBlue font-black">
          <Link to="/signup">JOIN US NOW!!</Link>
        </h1>
        <p className="text-4xl text-russet font-bold">
          <q>Unlock your true potential!!!</q>
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
