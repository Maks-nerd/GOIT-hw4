// Модули
import React, { Component } from 'react';

// Api
import { FetchMovieReviews } from '../services/ApiMovies';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await FetchMovieReviews(movieId);
    const reviews = response.data.results;

    this.setState({ reviews: reviews });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length !== 0 ? (
          <>
            <h3>Список отзывов:</h3>
            <ul>
              {reviews.map(review => (
                <li>{review}</li>
              ))}
            </ul>
          </>
        ) : <h3>У этого фильтам пока нет отзывов!</h3>}
      </>
    );
  }
}

export default Reviews;
