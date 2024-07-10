import Bmi from "../components/Bmi";
import Bmr from "../components/Bmr";
import Onerm from "../components/Onerm";

function Calculators() {
  return <div className="h-[2000px] w-full flex gap-6">
    <Bmi />
    <Bmr />
    <Onerm />
  </div>;
}

export default Calculators;
