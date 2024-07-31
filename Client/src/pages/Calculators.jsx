import Bmi from "../components/Calculators/Bmi";
import Bmr from "../components/Calculators/Bmr";
import Onerm from "../components/Calculators/Onerm";

function Calculators() {
  return <div className="h-[93vh] w-full flex gap-10 items-center justify-center relative">
    <Bmi />
    <Bmr />
    <Onerm />
  </div>;
}

export default Calculators;
