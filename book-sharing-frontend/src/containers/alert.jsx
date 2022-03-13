import React from 'react';
import Alert from 'react-bootstrap/Alert'


export function alert(props) {
	return <Alert variant="primary">{props.location.state.message}</Alert>
}