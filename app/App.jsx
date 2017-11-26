import React, { Component } from 'react';
import classname from 'classname';
import MessageList from './Page/MessageList/MessageList.jsx';
import ChatRoom from './Page/ChatRoom/ChatRoom.jsx';
import Personal from './Page/Personal/Personal.jsx';


import './App.scss'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			showPersonalPage: false,
			showMessageListPage: true,
			showChatRoomPage: false
		}
	}
	render(){
		return (
			<div className="container">
				<div className={classname({ 'MessageList-container-hide': !this.state.showMessageListPage, 'container-box': true })}>
						<MessageList />
				</div>
				<div className={classname({ 'Personal-container-hide': !this.state.showPersonalPage, 'container-box': true })}>
						<Personal />
				</div>
				<div className={classname({ 'ChatRoom-container-hide': !this.state.showChatRoomPage, 'container-box': true })}>
						<ChatRoom />
				</div>
			</div>
			)
			
	}
}

export default App;