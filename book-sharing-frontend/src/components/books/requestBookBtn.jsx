import { Link } from 'react-router-dom'

function RequestBookBtn(props){
	if (props.loggedIn) {
		return(
		    <Link to="/Request" className="btn btn-primary">Request</Link>
		)
	}
	return(
	    <Link to="/Login" className="btn btn-primary">Request</Link>
	)

}

export default RequestBookBtn