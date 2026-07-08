import GenresSlider from "../Components/GenresSlider";
import HeroSection from "../Components/HeroSection";
import AboutSite from "../Components/AboutSite";

function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutSite />
      <GenresSlider></GenresSlider>
    </div>
  );
}

export default Home;
