import React, { Component } from 'react';
import Account from '../components/users/Account'

export default class AccountContainer extends Component {
	render(props) {
		return(
			<div className="account-container mt-5">
				<Account/>
			</div>
		)
	}
}