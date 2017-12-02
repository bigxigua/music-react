import React, { Component } from 'react';
import '../scss/chatbox.scss'
import { socket } from '../actions/index.js'
import MessageList from '../component/MessageList.jsx'


export default class ChatBox extends Component {
	constructor(props){
		super(props);
		this.listenMessage();
	}
	listenMessage(){
		socket.on('newMessage', (message) => {
			console.log(message)
		})
	}
	render(){
		const ChatBoxStyle = {
			backgroundImage: 'url(' + this.props.chatRoomBackGround + ')'
		}
		const MessageLists = this.props.messageLists.map((item) => {
			return (<MessageList key={item.timestamp} data={item}> </MessageList>)
		})
		console.log(MessageLists)
		return (
			<div className="ChatBox-container" style={ChatBoxStyle}>
				<div className="MessageContainer-content">
					{ MessageLists }
				</div>
			</div>
		)
	}
}