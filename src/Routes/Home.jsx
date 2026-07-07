import GenresSlider from "../Components/GenresSlider"
import HeroSection from "../Components/HeroSection"
import HighRatedSlider from "../Components/HighRatedSlider"

function Home(){
    return(
        <div>
            <HeroSection></HeroSection>
            <GenresSlider></GenresSlider>
            <HighRatedSlider></HighRatedSlider>
        </div>
        
    )
}

export default Home