import React from "react";
import { useState, useEffect } from "react";
import { MovieService } from "../api/MoviesService";
import { MoviesContainer } from "../styles/MoviesContainer";
import { MoviesList } from "../components/MoviesList"

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
  const { data } = await MovieService.getMovies();
    console.log(data);
    setMovies(data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MoviesContainer>
      <MoviesList movies={movies} />
    </MoviesContainer>
  );
}