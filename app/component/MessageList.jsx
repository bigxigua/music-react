import React, { Component } from 'react';
import '../scss/messagelist.scss'


export default class MessageList extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const info = this.props.data;
		return ( 
			<div className="MessageList-container">
				<div className="MessageList-userinfo">
					<img src={info.avatar} className="MessageList-avatar" />
				</div>
				<div className="MessageList-content">
					<p>{ info.nickname }</p>
					<div className="MessageList-message">
							{ info.content }
							<div className="triangle-right-outer"></div>
					</div>
				</div>
			</div>
		)
	}
}