import React, { Component } from 'react';

//import components
import CareerPicker from './../CareerPicker.jsx';

class Index extends Component {
	render() {
		return(
			<div className="index">
				<img src="./img/bluprint.png" />
				<CareerPicker />
			</div>
		)
	}
}

export default Index;