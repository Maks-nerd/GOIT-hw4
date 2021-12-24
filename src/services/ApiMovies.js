// Модули
import Axios from 'axios';

Axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '0a930c0e2475cc5812ad408c76ce1c1e';

const fetchTrendingMovies = () => {
	return Axios.get(`/trending/movie/day?api_key=${KEY}`);
};

const FetchMovieDetails = (id) => {
	return Axios.get(`/movie/${id}?api_key=${KEY}&language=ru-RU`);
}

const FetchMovieCredits = (id) => {
	return Axios.get(`/movie/${id}/credits?api_key=${KEY}&language=ru-RU`);
}

const FetchMovieReviews = (id) => {
	return Axios.get(`/movie/${id}/reviews?api_key=${KEY}&language=ru-RU&page=1`);
}

const fetchQuerySearch = (querySearch) => {
	return Axios.get(`/search/movie?query=${querySearch}&api_key=${KEY}&language=ru-RU&page=1&include_adult=true`);
}

export {fetchTrendingMovies, FetchMovieDetails, FetchMovieCredits, FetchMovieReviews, fetchQuerySearch};