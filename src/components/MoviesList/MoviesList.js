// Компоненты
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MoviesList = ({ movies, location, title }) => {
const { pathname } = location;

  return (
    <>
      {movies && movies.length !== 0 && (
        <>
          <h1>{title}</h1>
          <ul>
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link
                  to={{
                    pathname: `/movies/${id}`,
                    state: { from: pathname },
                  }}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default withRouter(MoviesList);
