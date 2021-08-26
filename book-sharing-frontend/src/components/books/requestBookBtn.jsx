import { Link } from 'react-router-dom'

function RequestBookBtn(props){

    function handleGuestClick() {
	    const loginBtn = document.querySelector("#loginBtn")
	    loginBtn.style.display = "none"
  	}
  
	if (props.loggedIn) {
		return(
			<Link to={`/books/${props.bookId}`} className="btn btn-primary">Request</Link>
		)}
	return(
		<Link to="/login" className="btn btn-primary" onClick={handleGuestClick}>Request</Link>
	)
}

export default RequestBookBtn

