import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MovieService } from "../api/MoviesService";

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const fetchMovie = async (id) => {
        const { data } = await MovieService.getMovieById(id);
        console.log(data);
        setMovie(data);
    }

    useEffect(() => {
        fetchMovie(id);
    }, [id]);

    return (
        <section>
            <h1>{movie.title}</h1>
            <article>{movie.overview}</article>
        </section>
    );
}