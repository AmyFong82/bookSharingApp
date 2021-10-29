import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class PageNotFound extends Component {
	render(){
		return(
			<div className="account-container mt-5">
				<h1> The page you are trying to visit does not exist.</h1>
				<Link to={`/books`} className="btn btn-primary">Home</Link>
			</div>
		)
	}
}