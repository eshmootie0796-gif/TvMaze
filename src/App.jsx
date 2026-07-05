import './index.css'
import { createContext, useEffect, useState } from "react";
import { getMovies } from "../src/Services/Api";
import Home from './Routes/Home';

export const movieContext = createContext()

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies()
      console.log(movies)
    }
    fetchMovies()
  }, [])



  return (
    <>
      <movieContext.Provider value={{ setIsDark, isDark }}>
        <Home></Home>
      </movieContext.Provider>
    </>
  )
}

export default App
