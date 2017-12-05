import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../scss/form.scss'
import classNames from 'classnames'
const Toast = (props) => {
	let text = props.text;
	const toastClass = classNames({
		'Toast-container animated': true,
		'hideToast': text == '',
		'slideInUp': text !== ''
	})
	return (
		<div className={toastClass}>
			<span>{props.text}</span>
		</div>
	)
}

export default class FormContent extends Component {
	constructor(props){
		super(props);
		this.state = {
			warnningText: '',
			showwToast: false
		}
		this.confirmSubmission = this.confirmSubmission.bind(this);
	}
	checkAccount(){
		return /^[0-9]\d*$/.test(this.refs.account.value) ? true 
		       : (this.showToastHandle('请填写账号（全数字）'))
	}
	checkPassword(){
		return this.refs.password.value.length > 0 ? true 
		       : (this.showToastHandle('请填写密码'))
	}
	checkName(){
		return this.refs.name.value.length > 0 ? true 
		       : (this.showToastHandle('请填写用户名'))
	}
	confirmSubmission(){
		const checkNameResult = this.props.formType == 'register' 
		                      ? (this.checkName()) : true;
		if(this.checkAccount() && this.checkPassword() && checkNameResult) {
			window.location.href = '/index'
		}
	}
	showToastHandle(text){
		this.setState({
			warnningText: text,
			showwToast: true
		})
		setTimeout(() => {
			this.hideToastHandle()
		}, 2000)
		return false;
	}
	hideToastHandle(){
		this.setState({
			warnningText: '',
			showwToast: false
		})
	}
	render(){
		const type = this.props.formType;
		const nameElement = type == 'register' ? (
			<div className="Form-input Form-input-name">
				<input type="text" placeholder="输入用户名" maxLength="16" autoComplete="off" ref="name" />
			</div>
			) : '';
		return (
				<div className="Form-container">
					{nameElement}
					<div className="Form-input Form-input-account">
						<input type="text" placeholder="用户名/手机号" maxLength="15" autoComplete="off" ref="account" />
					</div>
					<div className="Form-input Form-input-password">
						<input type="password" placeholder="输入密码" maxLength="16" autoComplete="off" ref="password" />
					</div>
					<div className="Form-btn" onClick={this.confirmSubmission}>
						{ type == 'login' ? '登陆' : '注册'}
					</div>
					<div className="Form-footer">
						{ type == 'login' 
						    ? (<Link to="/register">快速注册</Link>)
							: (<Link to="/login">去登陆</Link>)
						 }
					</div>
					<Toast text={this.state.warnningText} />
				</div>
		)
	}
}