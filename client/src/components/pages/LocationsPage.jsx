import React, { Component } from 'react';

//import components

class LocationsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isTeleportDataLoaded: false,
			housingData: null,
			safetyData: null,
			colData: null,
		}
	}

	componentDidMount() {
		this.fetchTeleportData();
	}

	fetchTeleportData() {
		fetch(`https://api.teleport.org/api/urban_areas/slug:new-york/scores`)
			.then(res => {
				return res.json();
			})
			.then(jsonRes => {
				console.log(jsonRes.categories[0].score_out_of_10);
				console.log(jsonRes.categories[7].score_out_of_10);
				console.log(jsonRes.categories[1].score_out_of_10);
				this.setState({
					housingData: Math.round(jsonRes.categories[0].score_out_of_10),
					safetyData: Math.round(jsonRes.categories[7].score_out_of_10),
					colData: Math.round(jsonRes.categories[1].score_out_of_10),
				})
			})
	}

	render() {
		return(
			<div className="locations_page">
				<img src="./img/bluprint.png" alt="bluprint logo" />
				<section className="location_info">
					<h2>Housing</h2>
					<p className="housing">{ this.state.housingData }</p>
					<h2>safety</h2>
					<p className="safety">{ this.state.safetyData }</p>
					<h2>cost_of_living</h2>
					<p className="cost_of_living">{ this.state.colData }</p>
				</section>
			</div>
		)
	}
}

export default LocationsPage;