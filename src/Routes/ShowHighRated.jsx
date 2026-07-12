import { useContext, useState, useEffect } from "react";
import Card from "../Components/Card";
import useInfiniteScroll from "../Hooks/useInfiniteScroll";
import { movieContext } from "../features/context";

function ShowHighRated() {
  const { topMovies, loading, loadMovies } = useContext(movieContext);
  const [visible, setVisible] = useState(20);

  useEffect(() => {
    setVisible(20);
  }, []);

  useInfiniteScroll(() => {
    if (visible < topMovies.length) {
      setVisible((prev) => prev + 20);
    } else {
      loadMovies();
    }
  }, loading);

  return (
    <div className="grid grid-cols-6 gap-10 p-10">
      {topMovies.slice(0, visible).map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default ShowHighRated;
