import React from 'react';
// import withHigherOrderComponent from './hoc/withHigherOrderComponent';
// import withLog from './hoc/withLog';
import withFetch from './hoc/withFetch';

const KEY = '0a930c0e2475cc5812ad408c76ce1c1e';

const MyComponent = ({ data }) => {
  const { results } = data;
  return (
    <>{results && results.map(({ title, id }) => <li key={id}>{title}</li>)}</>
  );
};

export default withFetch(
  `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`,
)(MyComponent);
