import axios from "axios";

export const getSearch = async (query) => {
    try {
        const response = await axios.get("https://api.tvmaze.com/search/shows",
            { params: { q: query } }
        )
        return response.data
    }
    catch (error) {
        console.log(error)
        throw error
    }
}