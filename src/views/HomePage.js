// Модули
import React from 'react';

// Компоненты
import MoviesList from '../components/MoviesList';
import withFetch from '../components/hoc/withFetch';

const KEY = '0a930c0e2475cc5812ad408c76ce1c1e';

const HomePage = ({data}) => {
  const movies = data.results;

  return <>{movies && <MoviesList movies={movies} title="Trending today" />}</>;
};

export default withFetch(
  `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`,
)(HomePage);
