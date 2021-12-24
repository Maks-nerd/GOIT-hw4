// Модули
import React, { Component } from 'react';

// Api
import { FetchMovieCredits } from '../services/ApiMovies';

// Компоненты
import CastList from '../components/CastList';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await FetchMovieCredits(movieId);
    const { cast } = response.data;

    this.setState({ cast: cast });
  }

  render() {
    const { cast } = this.state;

    return (
			<CastList cast={cast} title="В ролях:" />
    );
  }
}

export default Cast;
