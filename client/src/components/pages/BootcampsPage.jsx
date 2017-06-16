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
				// console.log(this.state.BootcampData)
				// this.renderBootcamps()
			})

	}

	// renderBootcamps() {
	// 	// if (this.state.isBootcampDataLoaded) {
	// 		// console.log(this.state.BootcampData)
	// 		if (document.location.pathname === '/bootcamps/webdevelopment') {
	// 			this.state.BootcampData.map((info, index) => {
	//               return <Bootcamp name={ info.name } price={ info.price } length={ info.length } city={ info.city } field={ info.field } key={ index } />
	//             })
	//             console.log(this.state.BootcampData)
	//             console.log('LOADED')
	// 		} 
	// 	// } else {
	// 	// 	<img src="./img/bluprint.png" />
	// 	// }

	// }

	renderBootcamps() {
	if (document.location.pathname === '/bootcamps/webdevelopment') {
		console.log('ON THE WEB DEV PAGE')
		if (this.state.isBootcampDataLoaded) {
			console
			// return (
			// 	<div>
			// 		<Storelist brooklynFoodData={ this.state.brooklynFoodData } BootcampData={ this.state.BootcampData } />
			// 	</div>
			// ) 
			this.state.BootcampData.map((info, index) => {
				return <Bootcamp name={ info.name } price={ info.price } length={ info.length } city={ info.city } field={ info.field } key={ index } />
			}) 
		} 
		// else {
		// 	return <img className="loading" src="img/loading.gif" /> 
		// }
		// else {
		// 	return <img className="loading" src="img/loading.gif" /> 
		// }
		}
	}

	render() {
		return(
			<div className="bootcamps_page">
				<h1 className="bootcamp_field">Web Development</h1> 
				<h1 className="title_end">Bootcamps</h1>
				{ this.state.isBootcampDataLoaded 
	            ? 
	            this.state.BootcampData.map((info, index) => {
	              return <Bootcamp name={ info.name } price={ info.price } length={ info.length } city={ info.city } field={ info.field } key={ index } />
	            })
	            :
	            <img src="./img/loading2.gif" />} 
	            {/**{ this.renderBootcamps() }**/}
			</div>
		)
	}
}

export default Index;