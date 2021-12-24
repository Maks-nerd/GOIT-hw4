// Модули
import React, { Component } from 'react';

// Api
import { FetchMovieDetails } from '../services/ApiMovies';

// Компоненты
import MovieInfo from '../components/MovieInfo';
import MovieInfoExtra from '../components/MovieInfoExtra';

class MovieDetailsPage extends Component {
  state = {
    movie: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await FetchMovieDetails(movieId);
    const { data } = response;

    this.setState({ movie: data });
  }

  render() {
    const { movie } = this.state;

    return (
      <>
        <MovieInfo movie={movie} />
        <MovieInfoExtra />
      </>
    );
  }
}

export default MovieDetailsPage;
