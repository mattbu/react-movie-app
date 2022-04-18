import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovieInfo = async () => {
    const { data } = await axios.get(
      "https://yts.mx/api/v2/movie_details.json",
      {
        params: {
          movie_id: params.id,
        },
      }
    );
    setMovie(data.data.movie);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovieInfo();
  }, []);
  return (
    <div>
      {isLoading ? (
        <h1>is Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h1>{movie.title}</h1>
          <button
            onClick={() => {
              navigate(
                `https://www.youtube.com/watch?v=${movie.yt_trailer_code}`
              );
            }}
          >
            예고편 보기
          </button>
          <p>
            {movie.year} ::: Rating: {movie.rating}
          </p>
          {movie.genres.map((genre, index) => (
            <span key={genre}>
              {genre} {index !== movie.genres.length - 1 ? "/ " : null}
            </span>
          ))}
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
