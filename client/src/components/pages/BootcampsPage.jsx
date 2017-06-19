import React, { Component } from 'react';

//import components
import Bootcamp from './../Bootcamp.jsx';
import Loading from './../Loading.jsx';

class Index extends Component {
	constructor() {
		super()
		this.state = {
			isBootcampDataLoaded: false,
			BootcampData: null,
		}
	}

	componentDidMount() {
		this.fetchBootcampData();
		// console.log(this.state.BootcampData)
		// this.renderBootcamps();
	}

	fetchBootcampData() {
		fetch('http://localhost:3001/api/bootcamps')
			.then(res => {
				return res.json();
			})
			.then(jsonRes => {
				this.setState({
					isBootcampDataLoaded: true,
					BootcampData: jsonRes.data,
				})
				console.log(this.state.BootcampData)
				// this.renderBootcamps()
			})

	}

	renderBootcamps() {
		this.state.isBootcampDataLoaded 
	    ? 
		this.state.BootcampData.map((info, index) => {
			return <Bootcamp name={ info.name } price={ info.price } length={ info.length } city={ info.city } field={ info.field } key={ index } />
		})
	    :
	    <img src="./img/loading2.gif" />
	}

	// renderBootcamps() {
	// if (document.location.pathname === '/bootcamps/webdevelopment') {
	// 	console.log('ON THE WEB DEV PAGE')
	// 	if (this.state.isBootcampDataLoaded) {
	// 		// return (
	// 		// 	<div>
	// 		// 		<Storelist brooklynFoodData={ this.state.brooklynFoodData } BootcampData={ this.state.BootcampData } />
	// 		// 	</div>
	// 		// ) 
	// 		this.state.BootcampData.map((info, index) => {
	// 			return <Bootcamp name={ info.name } price={ info.price } length={ info.length } city={ info.city } field={ info.field } key={ index } />
	// 		})
	// 	} 
	// 	// else {
	// 	// 	return <img className="loading" src="img/loading.gif" /> 
	// 	// }
	// 	// else {
	// 	// 	return <img className="loading" src="img/loading.gif" /> 
	// 	// }
	// 	}
	// }

	render() {
		return(
			<div className="bootcamps_page">
				<h2 className="bootcamp_field">Web Development</h2> 
				<h2 className="title_end">Bootcamps</h2>
	            { this.state.isBootcampDataLoaded 
			    ? 
				this.state.BootcampData.map((info, index) => {
					return <Bootcamp name={ info.name } price={ info.price } length={ info.length } city={ info.city } field={ info.field } key={ index } />
				})
			    :
			    <img src="./img/loading2.gif" /> }
			</div>
		)
	}
}

export default Index;