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
			})

	}

	render() {
		return(
			<div className="index">
				<h1>Web Development Bootcamps</h1>
				{ this.state.isBootcampDataLoaded 
	            ? 
	            this.state.BootcampData.map((info, index) => {
	              return <Bootcamp name={ info.name } price={ info.price } length={ info.length } city={ info.city } field={ info.field } key={ index } />
	            })
	            :
	            <p>LOADING...</p> }
			</div>
		)
	}
}

export default Index;