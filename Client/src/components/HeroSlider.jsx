import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import hero1 from "../assets/hero/hero1.webp";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";
import hero4 from "../assets/hero/hero4.jpg";

function HeroSlider() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="min-h-full min-w-[100vw] bottom-0 -z-10 absolute brightness-[.2] ">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={2500}
        bullets={false}
        buttons={false}
      >
        <div data-src={hero1} />
        <div data-src={hero2} />
        <div data-src={hero3} />
        <div data-src={hero4} />
      </AutoplaySlider>
    </div>
  );
}

export default HeroSlider;
