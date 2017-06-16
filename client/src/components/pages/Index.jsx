import React, { Component } from 'react';

//import components
import CareerPicker from './../CareerPicker.jsx';

class Index extends Component {
	render() {
		return(
			<div className="index">
				<section className="hero">
					<img src="./img/bluprint.png" alt="bluprint logo" />
				</section>
				<CareerPicker />
			</div>
		)
	}
}

export default Index;