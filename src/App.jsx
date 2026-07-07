import './index.css'
import { createContext, useEffect, useState } from "react"
import { getMovies } from "../src/Services/Api"
import Layout from './Layout'
import ShowGenre from './Routes/ShowGenre'
import ShowHighRated from './Routes/ShowHighRated'
import pfp from "./assets/me.jpeg"
import { Route, Routes, BrowserRouter } from 'react-router'
import Home from './Routes/Home'

export const movieContext = createContext()

function App() {
  const [isDark, setIsDark] = useState(true)
  const [movies, setMovies] = useState([])
  const [selectedGenre, setSelectedGenre] = useState("Anime")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies()
      setMovies(movies)
      console.log(movies)
    }
    fetchMovies()
  }, [])

  const loadMovies = async () => {
    if (loading) return
    setLoading(true)
    try {
      const data = await getMovies(page)
      setMovies((prev) => [...prev, ...data])
      setPage((prev) => prev + 1)
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    loadMovies()
  }, [])

  const topMovies = [...movies].sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0)).slice(0, 100)
  const user = {
    username: "Mahta",
    role: "user",
    password: 12345,
    pfp: pfp
  }

  return (
    <>
      <movieContext.Provider value={{ setIsDark, isDark, user, movies, selectedGenre, setSelectedGenre, loading, loadMovies, topMovies }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/ShowGenre' element={<ShowGenre />} />
              <Route path='/ShowHighRated' element={<ShowHighRated />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </movieContext.Provider>
    </>
  )
}
export default App
