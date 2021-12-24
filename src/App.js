// Модули
import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Компоненты
import routes from './routes';
import AppBar from './components/AppBar';
import MyComponent from './components/MyComponent';

// Шаблоны статической загрузки
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';

// Шаблоны динамической загрузки
const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback="Загружаем...">
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movie} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Route path='/mycomponent' component={MyComponent} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
