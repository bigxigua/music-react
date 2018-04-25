import React, { Component } from 'react';
import '../scss/usercenter.scss'

export default class UserCenter extends Component {
	constructor(props){
		super(props);
		this.setPageState = this.setPageState.bind(this);
	}
	setPageState(){
		return this.props.setPageState('USERINFO-HIDE-PAGE')
	}
	render(){
		const { avatar, nickname, account, info } = this.props.userInfo;
		return (
				<div className="UserCenter-container">
						<div className="UserCenter-header">
							<i className="w-icon-arrow-left"></i>
							<span>用户资料</span>
						</div>
						<div className="UserCenter-profile">
              <img src="" alt=""/>
						</div>
				</div>
		)
	}
}