import axios from "axios"

export const getMovies = async (page = 0) => {
    try {
        const response = await axios.get(`https://api.tvmaze.com/shows?page=${page}`)
        return response.data
    }
    catch (error) {
        console.log(error)
        throw error
    }
}