// Модули
import React, { Component } from 'react';

// Api
import { FetchMovieCredits } from '../services/ApiMovies';

// Комппоненты
import CastList from '../components/CastList';

class Depatment extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await FetchMovieCredits(movieId);
    const { crew } = response.data;

    this.setState({ cast: crew });
  }

  render() {
    const { cast } = this.state;

    return <CastList cast={cast} title="Команда:" />;
  }
}

export default Depatment;
