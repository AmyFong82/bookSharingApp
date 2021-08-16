import { Link } from 'react-router-dom'

function RequestBookBtn(props){
	if (props.loggedIn) {
		return(
		    <Link to="/Request" className="btn btn-primary">Request</Link>
		)
	}
	return(
	    <a href="#" className="btn btn-primary">Request</a>
	)

}

export default RequestBookBtn