// Компоненты
import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

// Компоненты
import Cast from '../../views/Cast';
import Department from '../../views/Department';
import Reviews from '../../views/Reviews';

const MovieInfoExtra = ({match}) => {
  const { url, path } = match;

  return (
    <>
      <h3>Дополнительная информация:</h3>
      <ul>
        <li>
          <Link to={`${url}/cast`}>В ролях</Link>
        </li>
        <li>
          <Link to={`${url}/department`}>Команда</Link>
        </li>
        <li>
          <Link to={`${url}/reviews`}>Отзывы</Link>
        </li>
      </ul>

      <Route path={`${path}/cast`} component={Cast} />
      <Route path={`${path}/department`} component={Department} />
      <Route path={`${path}/reviews`} component={Reviews} />
    </>
  );
};

export default withRouter(MovieInfoExtra);
