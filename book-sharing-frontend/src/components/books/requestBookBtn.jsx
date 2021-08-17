import { Link } from 'react-router-dom'

function RequestBookBtn(props){

    function handleClick() {
	    const loginBtn = document.querySelector("#loginBtn")
	    loginBtn.style.display = "none"
  }


	if (props.loggedIn) {
		return(
			<Link to="/request" className="btn btn-primary">Request</Link>
		)
	}
	return(
		<Link to="/login" className="btn btn-primary" onClick={handleClick} >Request</Link>
	)

}

export default RequestBookBtn