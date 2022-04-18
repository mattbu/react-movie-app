import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

function Movie({ id, title, poster, genres, summary }) {
  const params = useParams();
  return (
    <div>
      <img src={poster} alt={title} />
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;
