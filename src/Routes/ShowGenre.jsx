import { useContext, useState,useEffect } from "react"
import Card from "../Components/Card"
import useInfiniteScroll from "../Hooks/useInfiniteScroll"
import { movieContext } from "../App"

function ShowGenre() {
    const { movies, selectedGenre,loading, loadMovies } = useContext(movieContext)
    const [visible, setVisible] = useState(20)

    useEffect(() => {
        setVisible(20)
    }, [selectedGenre])

     const filteredGenre = movies.filter(movie => {
        return movie.genres.includes(selectedGenre)
    })

    useInfiniteScroll(() => {
        if (visible < filteredGenre.length) {
            setVisible(prev => prev + 20)
        } else {
            loadMovies()
        }
    }, loading)

    return (
        <div className="grid grid-cols-6 gap-10 p-10">
            {filteredGenre.slice(0, visible).map(movie => (
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
    )

}

export default ShowGenre