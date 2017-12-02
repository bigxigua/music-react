import React, { Component } from 'react';
import '../scss/messagelist.scss'


export default class MessageList extends Component {
	constructor(props){
		super(props);
		console.log(this.props)
	}
	render(){
		const info = this.props.data;
		return (
			<div className="MessageList-container">
				<div className="MessageList-userinfo">
					<img src={info.avatar} className="MessageList-avatar" />
				</div>
				<div className="MessageList-content">
					<p>{ info.timestamp }</p>
					<div className="MessageList-message">
							{ info.message }
							<div className="triangle-right-outer"></div>
					</div>
				</div>
			</div>
		)
	}
}