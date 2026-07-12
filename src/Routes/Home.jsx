import GenresSlider from "../Components/GenresSlider"
import HeroSection from "../Components/HeroSection"
import HighRatedSlider from "../Components/HighRatedSlider"
import AboutSite from "../Components/AboutSite"
import Footer from "../Components/Footer"

function Home() {
  return (
    <div>
      <HeroSection />
      <GenresSlider />
      <HighRatedSlider />
      <AboutSite />
      <Footer />
    </div>
  );
}

export default Home;
