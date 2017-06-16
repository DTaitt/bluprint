import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Bootcamp extends Component {
	render() {
		return(
			<section className="bootcamp">
				<h2>{ this.props.name }</h2>
				<p className="price">${ this.props.price }</p>
				<p className="length">{ this.props.length } weeks</p>
				<Link className="locations btn" to="/locations/newyork">{ this.props.city }</Link>
				<p>{ this.props.field }</p>
			</section>
		)
	}
}

export default Bootcamp;