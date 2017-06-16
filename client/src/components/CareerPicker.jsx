import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CareerPicker extends Component {
	render() {
		return(
			<nav>
				<h1>Choose your intended field</h1>
				<ul className="btn_list">
					<li className="btn"><Link to="/bootcamps/webdevelopment">Web Development</Link></li>
					<li className="btn"><Link to="/bootcamps/webdesign">Web Design</Link></li>
					<li className="btn"><Link to="/bootcamps/datascience">Data Science</Link></li>
				</ul>
			</nav>
		)
	}
}

export default CareerPicker;