import React, {Component} from 'react'
import Book from '../books/Book'
import RequestForm from "./RequestForm"
import { connect } from 'react-redux'


class Request extends Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			book: []
		}
	}

	componentDidMount(){
		const id = this.props.match.params.id
		fetch(`http://localhost:3001/api/v1/books/` + id)
		.then(resp => resp.json())
		.then(
			respJson => {
				this.setState({
					isLoaded: true,
					book: respJson
				});
			},
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
        )
	}
	

	render(){
		const { error, isLoaded, book } = this.state
		if (error) {
			return <div> Error: {error.message}</div>
		} else if (!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<div className="container mt-5">
					<div className="row">
						<Book book={book}/>
						<RequestForm book={book} requester={this.props.user} loginStates={this.props.loginStatus}/>
					</div>
				</div>
			)
		}

	}
}

const mapStateToProps = state => {
	return {
		user: state.user.currentUser.user,
		loginStates: state.user.loginStatus
	}
}

export default connect(mapStateToProps)(Request)