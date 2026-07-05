import { getSearch } from "../Services/SearchApi"
import { useState,useEffect } from "react"

function Search() {
    const [input, setInput] = useState("")
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const result = await getSearch(input)
                setMovies(result)
            } catch (error) {
                console.log(error)
            }
        };

        if (input.trim()) {
            fetchSearch()
        }
    }, [input])

    function closeMovies() {
        setInput("")
        setMovies([])
    }

    return (
        <div>
            <div className="flex gap-2">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search..." className="w-100 font-bold rounded-4xl px-2 py-3 outline-none border border-red-700 " />
                {input.trim() && <button onClick={() => closeMovies()} className="bg-red-700 text-white p-2 rounded-4xl w-30 cursor-pointer">Close</button>}
            </div>
            {input.trim() && movies.length > 0 && (
                <ul className="absolute z-10 bg-white p-3 min-h-100 max-h-50 w-100 overflow-y-auto mt-3 rounded">
                    {movies.map(movie => (
                        <li key={movie.show.id} className="flex gap-3 p-2 hover:bg-gray-100 cursor-pointer">
                            <img src={movie.show.image?.medium || "/placeholder.png"} alt={movie.show.name} className="w-12 h-16 rounded" />
                            <span>{movie.show.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Search