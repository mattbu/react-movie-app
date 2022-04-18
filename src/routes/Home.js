import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMoives = async () => {
    const { data } = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    setMovies(data.data.movies);
    setIsLoading(false);
  };
  useEffect(() => {
    getMoives();
  }, []);
  return (
    <>
      {isLoading ? (
        <h1>is Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </>
  );
}
export default Home;
