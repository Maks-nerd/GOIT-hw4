// Модули
import React, { Component } from 'react';

// Компоненты
import FormSearchMovies from '../components/FormSearchMovies';
import MoviesList from '../components/MoviesList';

class MoviesPage extends Component {
	state = {
		movies: [],
	}

	getSearchList = (searchList) => {
		this.setState({ movies: searchList });
	}

	render() {
		const { movies } = this.state;

		return ( 
			<>
			<FormSearchMovies fetchSearchList={this.getSearchList} />
			<MoviesList movies={movies} title="Нашлось по вашему запросу" />
			</>
		 );
	}
}
 
export default MoviesPage;