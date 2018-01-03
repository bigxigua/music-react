import React, { Component } from 'react';
import '../scss/inputarea.scss'
import classNames from 'classnames';

import { sendMessage } from '../actions/index.js'

export default class InputArea extends Component {
	constructor(props){
		super(props);
		this.state = {
			content: '',
			showEmoji: false
		}
		this.sendMessageHandle = this.sendMessageHandle.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.showEmojiHandle = this.showEmojiHandle.bind(this);
	}
	sendMessageHandle(){
		if(!this.state.content) return;
		let currentRoomInfo = {};
		this.props.roomLists.map((item) => {
			item.roomName == this.props.currentRoomName ? (currentRoomInfo = item) : {};
		})
		let message = {
			roomName: this.props.currentRoomName,
			type: 'textMessage',
			account: localStorage.getItem('account'),
			content: this.state.content,
			isPrivate: currentRoomInfo.isPrivate
		}
		this.setState({
			content: ''
		});
		return sendMessage(message)
		// currentRoomInfo.isPrivate ? (sendPrivateMessage(message)) : (sendMessage(message));
	}
	handleChange(event){
		this.setState({content: event.target.value});
	}
	showEmojiHandle(){
		let _showEmoji = this.state.showEmoji;
		this.setState({
			showEmoji: !_showEmoji
		})
	}
	sendEmoji(item){
		const _content = this.state.content;
		this.setState({
			content: _content + '#('+ item +')',
			showEmoji: false
		})
	}
	render(){
		const Expressions = TBZ.expressions.map((item, index) => {
			return (
				<div
						key = {index}
						className = "expressions"
						onClick = {() =>{ this.sendEmoji(item) }}>
						<div 
							className="expression"
							style = {{background: 'url('+ TBZ.expressionsIMG +') 0px ' + (-index)*30 + 'px no-repeat'}}>
						</div>
				</div>
			)
		});
		
		const showEmojiClassNames = classNames({
			'emoji-box animated': true,
			'show-emoji': this.state.showEmoji
		})
		return (<div className="InputArea-container">
							<div className="InputArea-more-feature">
									<i className="w-icon-plus-circle-o"></i>
							</div>
							<div className="InputArea-input-box">
									<input className="InputArea-input" 
												 placeholder="输入消息，使用⌃/⌘ + enter输入表情"
												 value={this.state.content}
												 onChange={this.handleChange} />
									<i className="w-icon-smile-o" onClick={this.showEmojiHandle}></i>
							</div>
							<div className="InputArea-send" onClick={this.sendMessageHandle}>
									<i className="w-icon-enter"></i>
							</div>
							<div className={showEmojiClassNames}>
								{Expressions}
							</div>
						</div>)
	}
}