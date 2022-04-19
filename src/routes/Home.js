import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css";

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
  const ellipsisSummary = (text) => {
    console.log(text);
    if (text.length > 200) {
      return `${text.substring(0, 200)}...`;
    } else return text;
  };
  useEffect(() => {
    getMoives();
  }, []);
  return (
    <>
      {isLoading ? (
        <h1>is Loading...</h1>
      ) : (
        <div className={styles.container}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              summary={ellipsisSummary(movie.summary)}
            />
          ))}
        </div>
      )}
    </>
  );
}
export default Home;
