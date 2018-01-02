import React, { Component } from 'react';
import '../scss/friends.scss';
import classNames from 'classnames';

export default class Notify extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
		this.back = this.back.bind(this);
		
	}
	back(){
		return this.props.setPageState('MESSAGELIST-PAGE')
	}
	render(){
		return (
				<div className="friends">
						<div className="friends-shadow"></div>
						<div className="friends-lists">
							<ul>
									<li className="friends-list">
											<img src={TBZ.DEFAULT_AVATAR} />
											<div className="friends-name">天啊啊打</div>
											<div className="friends-sign">个性签名：好好学习，天天像桑</div>
									</li>
							</ul>
						</div>
						<div className="friends-back" onClick={this.back}>返回</div>
				</div>
		)
	}
}