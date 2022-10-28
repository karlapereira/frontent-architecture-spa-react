import axios from "axios";

const API_KEY = 'e46d210fe9992edff7ba1ce02c3eb5eb';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'))
    }

    static getMovieById(id) {
        return axios(withBaseUrl(`movie/${id}`))
    }
}