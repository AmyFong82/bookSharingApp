import React from 'react'
import { connect } from 'react-redux'


export function loggedIn(props) {
	console.log(props)
	if(props === 'LOGGED_IN'){
		return true
	}else{
		return false
	}
}