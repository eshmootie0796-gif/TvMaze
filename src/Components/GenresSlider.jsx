import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Genres } from "../Services/Genres"
import { movieContext } from "../features/context"
import Card from "./Card.jsx"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router"

function GenresSlider() {
    const [filtered, setFiltered] = useState([])
    const { movies, selectedGenre, setSelectedGenre } = useContext(movieContext)

    useEffect(() => {
        if (!selectedGenre) {
            setFiltered([])
            return
        }
        const filteredMovies = movies.filter(movie => {
            return movie.genres?.includes(selectedGenre) || movie.genre?.includes(selectedGenre)
        })
        const filterPreview = filteredMovies.slice(0, 20)
        setFiltered(filterPreview)
    }, [selectedGenre, movies])

    return (
        <div className="mt-15 relative px-4 sm:px-8 md:px-16 w-full select-none mx-auto">
            <div className="flex justify-between">
                <h1 className="text-5xl font-bold mb-6 dark:text-white">Genres</h1>
                <Link to="/ShowGenre" className="mt-5 text-[#4C3E86] hover:text-[#8864FE] dark:text-[#8864FE]">View All {selectedGenre} Series</Link>
            </div>
            <Carousel className="w-full relative flex justify-between gap-10" opts={{ align: "start" }}>
                <CarouselContent className="-ml-4 py-2">
                    {Genres.map(Genre => {
                        const isActive = selectedGenre === Genre.label
                        return (
                            <CarouselItem key={Genre.label} className="basis-auto pl-4" onClick={() => setSelectedGenre(Genre.label)}>
                                <div className={`flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg cursor-pointer transition-all duration-300 ${isActive ? 'bg-linear-to-r from-[#4C3E86] to-[#8864FE] text-white dark:text-black' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700'}`}>
                                    <Genre.icon size={18} className={isActive ? "text-white dark:text-black" : "text-gray-500"} />
                                    <span className="text-sm font-medium">{Genre.label}</span>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-9 z-10 bg-[#6334ffaf] border-none font-semibold text-white hover:bg-[#521efbaf] cursor-pointer" />
                <CarouselNext className="absolute -right-9 z-10 bg-[#6334ffaf] border-none font-semibold text-white hover:bg-[#521efbaf] cursor-pointer" />
            </Carousel>
            <Carousel className="mt-5 relative px-12 flex justify-between">
                <CarouselContent className="-ml-4 py-2">
                    {filtered.map(movie => {
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

export default GenresSlider