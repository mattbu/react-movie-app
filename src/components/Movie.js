import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({ id, title, poster, genres, summary }) {
  const params = useParams();
  return (
    <div className={styles.card}>
      <img src={poster} alt={title} />
      <h1>
        <Link to={`/movie/${id}`} className={styles.link}>
          {title}
        </Link>
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
