// Компоненты
import React, { Component } from 'react';

// Api
import {fetchQuerySearch} from '../../services/ApiMovies';

class FormSearchMovies extends Component {
	state = { 
		querySearch: '',
	 }

	 handlerInputChange = (e) => {
		this.setState({ querySearch: e.target.value });
	}

	handlerSendQuerySearch = async (e) =>{
		e.preventDefault();

		const {querySearch} = this.state;
		const response = await fetchQuerySearch(querySearch);
		const searchList = response.data.results;
		const {fetchSearchList} = this.props;

		fetchSearchList(searchList);
		this.setState({ querySearch: '' });
	}

	render() { 
		const {querySearch} = this.state;
		
		return ( 
			<>
				<form onSubmit={this.handlerSendQuerySearch}>
					<input type="text" value={querySearch} onChange={this.handlerInputChange} />
					<button type="submit">Поиск</button>
				</form>
			</>
		 );
	}
}
 
export default FormSearchMovies;