import React, { Component } from 'react';
import MessageList from './Page/MessageList/MessageList.jsx'
import ChatRoom from './Page/ChatRoom/ChatRoom.jsx'

import './App.scss'

class App extends Component {
	render(){
		return (
			<div className="container">
				{/*<MessageList />*/}
				<ChatRoom />
			</div>
			)
			
	}
}

export default App;