import Bmi from "../components/Bmi";
import Bmr from "../components/Bmr";
import Onerm from "../components/Onerm";

function Calculators() {
  return <div className="h-[93vh] w-full flex gap-10 items-center justify-center relative">
    <Bmi />
    <Bmr />
    <Onerm />
  </div>;
}

export default Calculators;
