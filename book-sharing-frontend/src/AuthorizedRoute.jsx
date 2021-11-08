import { loggedIn } from './components/users/loggedIn'

export function AuthorizedRoute({children, ...rest}) {
	const auth = loggedIn(this.props.loginStatus)

	
}

const mapStateToProps = state => {
	return {
		loginStatus: state.user.loginStatus
	}
}