import React, { Component } from 'react'
import FormContent from '../../component/Form.jsx';
import '../../scss/login.scss'
import classNames from 'classnames'

export default class Login extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		// console.log(this.props)
	}
	render(){
		return (
			<div className="Login-container">
				<FormContent formType="login" />
			</div>
		)
	}
}