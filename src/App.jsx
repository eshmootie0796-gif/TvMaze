import "./index.css";
import { useEffect, useState } from "react";
import { getMovies } from "./Services/Api";
import Layout from "./Layout";
import ShowGenre from "./Routes/ShowGenre";
import pfp from "./assets/me.jpeg";
import { Route, Routes, BrowserRouter } from "react-router";
import Home from "./Routes/Home";
import ShowHighRated from "./Routes/ShowHighRated";
import Search from "./Routes/Search";
import { movieContext } from "./features/context";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });
  const [page, setPage] = useState(0);
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Anime");
  const [loading, setLoading] = useState(false);

  const loadMovies = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const data = await getMovies(page);
      setMovies((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadMovies();
  }, []);

  const topMovies = [...movies]
    .sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0))
    .slice(0, 100);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const user = {
    username: "Mahta",
    role: "user",
    password: 12345,
    pfp: pfp,
  };

  return (
    <>
      <movieContext.Provider
        value={{
          setIsDark,
          isDark,
          user,
          movies,
          selectedGenre,
          setSelectedGenre,
          loading,
          loadMovies,
          topMovies,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/ShowGenre" element={<ShowGenre />} />
              <Route path="/ShowHighRated" element={<ShowHighRated />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </movieContext.Provider>
    </>
  );
}
export default App;
