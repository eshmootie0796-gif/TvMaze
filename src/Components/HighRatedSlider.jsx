import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { movieContext } from "../App"
import { useContext } from "react"
import Card from "./Card"
import { Link } from "react-router"

function HighRatedSlider() {
    const { topMovies } = useContext(movieContext)

    return (
        <div className="mt-15 relative px-4 sm:px-8 md:px-16 w-full select-none mx-auto">
           <div className="flex justify-between">
                <h1 className="text-5xl font-bold mb-6">Bests</h1>
                <Link to="/ShowHighRated" className="mt-5 text-[#4C3E86] hover:text-[#8864FE]">View top 100 Series</Link>
            </div>
            <Carousel className="mt-5 relative px-12 flex justify-between">
                <CarouselContent className="-ml-4 py-2">
                    {topMovies.slice(0, 20).map(movie => {
                        return (
                            <CarouselItem key={movie.name} className="basis-50 pl-4 object-cover">
                                <Card movie={movie} className="flex items-center justify-center py-2.5 px-5"></Card>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 cursor-pointer border-none text-zinc-500 scale-200 "></CarouselPrevious>
                <CarouselNext className="absolute right-0 cursor-pointer border-none text-zinc-500 scale-200"></CarouselNext>
            </Carousel>
        </div>
    )
}

export default HighRatedSlider