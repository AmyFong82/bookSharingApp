import { Link } from 'react-router-dom'

function EditBookBtn(props){
	return(
	    <Link to={`/books/${props.bookId}`} className="btn btn-warning">Edit</Link>
	)
}

export default EditBookBtn