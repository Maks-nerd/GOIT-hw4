// Модули
import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

// Стили
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
	return ( 
		<ul className="list-inline">
			<li className="list-inline-item">
					<NavLink
						to={routes.home}
						className="NavLink"
						activeClassName="NavLink--active"
					>
						Домой
					</NavLink>
				</li>
				<li className="list-inline-item">
					<NavLink
						to={routes.movies}
						className="NavLink"
						activeClassName="NavLink--active"
					>
						Movies
					</NavLink>
				</li>
        <li className="list-inline-item">
					<NavLink
						to="/mycomponent"
						className="NavLink"
						activeClassName="NavLink--active"
					>
						TEST
					</NavLink>
				</li>
			</ul>
	 );
}
 
export default Navigation;