import React, { Component } from 'react';
import Head from '../../Common/Head/Head.jsx';
import SearchBar from '../../Common/SearchBar/SearchBar.jsx';
import ChatItem from '../../Common/ChatItem/ChatItem.jsx';

export default class MessageList extends Component {
	constructor(props){
		super(props);
		console.log(this.props)
	}
	render(){
		const MessageListData = {isChatList: true};
		const list = {
			chatType: 0, //0单人聊天，1讨论组，2群
			chatAvatar: '', //头像
			name: '装逼讨论组',
			lastedTime: '2017/11/25 17:13:00', //最后发言时间
			lastedSpeakerName: '傻吊',
			lastedSpeakeWord: '我是傻吊',
			unreadNumber: 0 //未读消息数量
		}
		const ListItems = [list,list,list].map((item, index) => 
				<ChatItem data={item} key={index}></ChatItem>
		)
		return (<div className="MessageList-container">
							<Head data={MessageListData}></Head>
							<div className="ActiveList-container">
								<SearchBar></SearchBar>
								{ListItems}
							</div>
						</div>)
	}
}