import React, { Component } from 'react';
import Head from '../../Common/Head/Head.jsx';
import InputArea from '../../Component/InputArea/InputArea.jsx';
import './ChatRoom.scss'

export default class ChatRoom extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const MessageListData = {isChatList: false, title: '装逼讨论组'};
		return (<div className="ChatRoom-container">
								<Head data={MessageListData} />
								<div className="ChatBox"></div>
								<InputArea />
						</div>)
	}
}