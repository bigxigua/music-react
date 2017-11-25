import React, { Component } from 'react';
import './Search.scss'

const ListItem = (props) => {
	return (
			<div className="ChatListItem">

			</div>
		)
}

export default class SearchBar extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const list = {
			chatType: 0, //0单人聊天，1讨论组，2群
			chatAvatar: '', //头像
			name: '装逼讨论组',
			lastedTime: '2017/11/25 17:13:00', //最后发言时间
			lastedSpeakerName: '傻吊',
			lastedSpeakeWord: '我是傻吊'
		}
		const ListItems = [list,list,list].map((item) => {
				<ListItem data={item}></ListItem>
		})
		return (
			<div className="SearchBar-container">
				<div className="searchInput">
					<div className="SearchInput-search-button">
						<i className="w-icon-search"></i>
					</div>
					<input type="text" className="searchInput-input" placeholder="搜索或开始新的对话"/>
				</div>
			</div>
		)
	}
}