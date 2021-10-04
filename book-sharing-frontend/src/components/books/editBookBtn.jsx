import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

function EditBookBtn(props){
	function handleGuestClick() {
	    const loginBtn = document.querySelector("#loginBtn")
	    loginBtn.style.display = "none"
  	}

	if(props.loginStatus === "LOGGED_IN") {
		return(
			<Link to={`/books/${props.book.id}/edit`} className="btn btn-warning">Edit</Link>
		)}
	return(
		<Link to="/login" className="btn btn-primary" onClick={handleGuestClick}>Request</Link>
	)
}

const mapStateToProps = state => {
	return{
		loginStatus: state.user.loginStatus
	}
}

export default connect(mapStateToProps)(EditBookBtn)