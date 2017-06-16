import React, { Component } from 'react';

//import components

class LocationsPage extends Component {
	render() {
		return(
			<div className="locations_page">
				<img src="./img/bluprint.png" alt="bluprint logo" />
				<section className="location_info">
					<p className="housing">housing</p>
					<p className="safety">safety</p>
					<p className="cost_of_living">cost_of_living</p>
				</section>
			</div>
		)
	}
}

export default LocationsPage;