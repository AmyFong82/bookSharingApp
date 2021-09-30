import { Link } from 'react-router-dom'

function EditBookBtn(props){
	return(
	    <Link to={`/book_edit/${props.book.id}`} className="btn btn-warning">Edit</Link>
	)
}

export default EditBookBtn