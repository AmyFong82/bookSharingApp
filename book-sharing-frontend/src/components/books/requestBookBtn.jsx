import { Link } from 'react-router-dom'

function RequestBookBtn(props){

  //   function handleClick() {
	 //    const loginBtn = document.querySelector("#loginBtn")
	 //    loginBtn.style.display = "none"
  // }

	return(
		<Link to="/request" className="btn btn-primary">Request</Link>
	)

}

export default RequestBookBtn