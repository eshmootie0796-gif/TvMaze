import { movieContext } from "../features/context";
import { useContext } from "react";

function HighRatedMovies() {
    const { movies } = useContext(movieContext)
    const topMovies = [...movies].sort((a,b) => {})
}

export default HighRatedMovies