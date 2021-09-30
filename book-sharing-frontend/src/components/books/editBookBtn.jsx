import { Link } from 'react-router-dom'

function EditBookBtn(props){
	return(
	    <Link to={`/books/${props.bookId}/edit`} className="btn btn-warning">Edit</Link>
	)
}

export default EditBookBtn