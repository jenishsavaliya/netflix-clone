import React, { useState, useEffect } from "react";
import axios from "./axios";


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //Give a fetchUrl in second parameter of userEffect because it will refresh only url if we not give any of them then it will reload onlly one time.

  console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
          {movies.map((movie, index) => {
              return <img key={index} src={`${base_url}${movie.poster_path}`} alt={movie.name} />
          })}
      </div>
    </div>
  );
}

export default Row;
