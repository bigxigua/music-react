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
		return (
				<div className="UserCenter-container">
						<div className="UserCenter-top-bg">
								<div className="UserCenter-out" onClick={this.setPageState}>
										<i className="w-icon-arrow-left"></i>返回
								</div>
								<img src={TBZ.DEFAULT_USER_BG} />
								<div className="UserCenter-avatar">
										<img src={TBZ.DEFAULT_AVATAR} />
								</div>
								<div className="UserCenter-zan">
										<p><i className="w-icon-like-o"></i></p>
										<p>1000</p>
								</div>
						</div>
						<div className="UserCenter-username">UserCenter</div>
						<div className="UserCenter-sign">
							<span>fuck you ！！！</span>
							<i className="w-icon-edit"></i>
						</div>
						<ul className="UserCenter-userInfo">
						    <li>
						    		<i className="w-icon-user"></i>
						    		<span>110110110</span>
						    </li>
						    <li>
						    		<i className="w-icon-user"></i>
						    		<span>110110110</span>
						    </li>
						    <li>
						    		<i className="w-icon-user"></i>
						    		<span>110110110</span>
						    </li>
						    <li>
						    		<i className="w-icon-user"></i>
						    		<span>110110110</span>
						    </li>
						</ul>
				</div>
		)
	}
}