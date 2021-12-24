// Компоненты
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MovieInfo extends Component {
  state = {};

  handlerClickBtnBack = () => {
    const { history, location } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    return history.push('/movies');
  };

  render() {
    const {
      backdrop_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
    } = this.props.movie;
    const PATH_IMG = 'https://image.tmdb.org/t/p/w500';
    const userScore = vote_average * 10;
    const yearRelease = String(release_date).split('-')[0];

    return (
      <>
        <div>
          <button type="button" onClick={this.handlerClickBtnBack}>
            Вернуться назад
          </button>
        </div>
        {backdrop_path && (
          <img src={`${PATH_IMG}${backdrop_path}`} alt={title} />
        )}
        <h1>
          {title}({yearRelease})
        </h1>
        <p>Пользовательская оценка: {userScore}%</p>
        <h2>Описание:</h2>
        <p>{overview}</p>
        <h2>Жанры:</h2>
        <p>
          {genres &&
            genres.map(({ id, name }) => (
              <span key={id}>
                <span>{name}</span>
                <br />
              </span>
            ))}
        </p>
        <br />
      </>
    );
  }
}

export default withRouter(MovieInfo);
