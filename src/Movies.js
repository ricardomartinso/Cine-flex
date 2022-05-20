import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
export default function Movies() {
  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((request) => {
      const moviesArray = request.data.map((objectMovies) => objectMovies);
      setMovie([...moviesArray]);
    });
  }, []);

  return (
    <div className="movies ">
      <h2 className="pick">Selecione o filme</h2>
      {movie.map((object, index) => (
        <MovieBox url={object.posterURL} id={object.id} key={index} />
      ))}
    </div>
  );
}
function MovieBox({ url, id }) {
  return (
    <Link to={`/session/${id}`}>
      <div className="movie-box">
        <img src={url} alt="sentiu" />
      </div>
    </Link>
  );
}
