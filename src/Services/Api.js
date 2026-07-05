import axios from "axios"

export const getMovies = async () => {
    try {
        const response = await axios.get("https://api.tvmaze.com/shows?page=0")
        return response.data
    }
    catch (error) {
        console.log(error)
        throw error
    }
}