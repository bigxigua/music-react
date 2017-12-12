import React, { Component } from 'react';
import '../scss/messagelist.scss'
import classNames from 'classnames'

export default class MessageList extends Component {
	constructor(props){
		super(props); 
	}
	render(){
		const info = this.props.data;
		const messageClassNames = classNames({
			'MessageList-container': true,
			'MessageList-container-other': !info.isSelf
		})
		return ( 
			<div className={messageClassNames}>
				<div className="MessageList-userinfo">
					<img src={info.owner.avatar || TBZ.DEFAULT_AVATAR } className="MessageList-avatar" />
				</div>
				<div className="MessageList-content">
					<p>{ info.owner.nickname }</p>
					<div className="MessageList-message">
							{ info.content }
							<div className="triangle-right-outer"></div>
					</div>
				</div>
			</div>
		)
	}
}