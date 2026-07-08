import { getSearch } from "../Services/SearchApi"
import { useState, useEffect } from "react"
import Card from "../Components/Card"

function Search() {
    const [input, setInput] = useState("")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!input.trim()) {
            setMovies([])
            return
        }

        const timeout = setTimeout(async () => {
            setLoading(true)
            try {
                const result = await getSearch(input)
                setMovies(result.map(item => item.show))
            } catch (error) {
                console.log(error)
                setMovies([])
            }
            setLoading(false)
        }, 300)

        return () => clearTimeout(timeout)
    }, [input])

    function clearSearch() {
        setInput("")
        setMovies([])
    }

    return (
        <div className="px-8 py-10 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Search Shows</h1>
            <div className="flex gap-3 mb-8">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search for a show..."
                    className="flex-1 font-medium rounded-2xl px-4 py-3 outline-none border border-gray-300 bg-white text-zinc-900 placeholder:text-gray-400 focus:border-[#8864FE] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                />
                {input.trim() && (
                    <button
                        onClick={clearSearch}
                        className="bg-[#4C3E86] text-white px-6 py-3 rounded-2xl cursor-pointer hover:bg-[#8864FE] transition-colors"
                    >
                        Clear
                    </button>
                )}
            </div>

            {loading && (
                <p className="text-gray-500 dark:text-zinc-400">Searching...</p>
            )}

            {!loading && input.trim() && movies.length === 0 && (
                <p className="text-gray-500 dark:text-zinc-400">No shows found for &quot;{input}&quot;</p>
            )}

            {movies.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {movies.map(movie => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Search
