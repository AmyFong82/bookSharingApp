import { Route } from 'react-router-dom'
import { loggedIn } from './components/users/loggedIn'
import { redirectToLogin } from './containers/redirectToLogin'

export function AuthorizedRoute({children, ...rest}) {
	const auth = loggedIn(this.props.loginStatus)

	return (
		<Route 
			{...rest}
			render={({location}) => 
				auth ? (
					children
				) : (
					redirectToLogin()
				)

			}

		/>

	)

	
}

const mapStateToProps = state => {
	return {
		loginStatus: state.user.loginStatus
	}
}