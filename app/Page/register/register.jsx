import React, { Component } from 'react'
import FormContent from '../../component/Form.jsx';
import '../../scss/register.scss'
import classNames from 'classnames'

export default class Register extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		// console.log(this.props)
	}
	render(){
		return (
			<div className="Register-container">
				<FormContent formType="register" />
			</div>
	)
	}
}