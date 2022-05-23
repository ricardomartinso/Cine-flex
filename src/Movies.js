import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./Header";

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
    <>
      <Header />
      <div className="movies ">
        <h2 className="pick">Selecione o filme</h2>
        {movie.map((object, index) => (
          <MovieBox url={object.posterURL} id={object.id} key={index} />
        ))}
      </div>
    </>
  );
}
function MovieBox({ url, id }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-box">
        <img src={url} alt="a" />
      </div>
    </Link>
  );
}
