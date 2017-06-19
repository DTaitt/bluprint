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
		if (document.location.pathname === '/locations/newyork') {
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
	}

	render() {
		return(
			<div className="locations_page">
				<h1>New York</h1>
				<section className="location_info">
					<h2>Rating</h2>
					<div className="housing">
						<h3>Housing</h3>
						<p><span>{ this.state.housingData }</span>/10</p>
					</div>	
					<div className="safety">
						<h3>Safety</h3>
						<p><span>{ this.state.safetyData }</span>/10</p>
					</div>	
					<div className="cost_of_living">	
						<h3>Cost of Living</h3>
						<p><span>{ this.state.colData }</span>/10</p>
					</div>	
				</section>
			</div>
		)
	}
}

export default LocationsPage;