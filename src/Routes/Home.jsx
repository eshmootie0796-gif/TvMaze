import GenresSlider from "../Components/GenresSlider";
import HeroSection from "../Components/HeroSection";
import HighRatedSlider from "../Components/HighRatedSlider";
import AboutSite from "../Components/AboutSite";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSite />
      <GenresSlider />
      <HighRatedSlider />
    </div>
  );
}

export default Home;
