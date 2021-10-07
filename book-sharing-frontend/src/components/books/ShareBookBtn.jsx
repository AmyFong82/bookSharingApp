import { Link } from "react-router-dom";
import { loggedIn } from '../users/loggedIn'
import { connect } from 'react-redux'




function ShareBookBtn(props){

	const handleClick = () => {
		return(loggedIn(props.loginStatus) ? '/books/new' : '/login')
	}

	return(
  		<Link to={handleClick} id="share_book_btn" className="btn btn-warning">Share A Book</Link> 
	)
}

const mapStateToProps = state => {
	return {
		loginStatus: state.user.loginStatus
	}
}

export default connect(mapStateToProps)(ShareBookBtn)