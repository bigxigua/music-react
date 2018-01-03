import React, { Component } from 'react';
import '../scss/friends.scss';
import classNames from 'classnames';
import { socket } from '../actions/index.js'

export default class Notify extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
		this.back = this.back.bind(this);
		this.listenNotify();
	}
	back(){
		return this.props.setPageState('MESSAGELIST-PAGE')
	}
	listenNotify(){
		socket.on('applyMessage', (data) => {
			this.props.getUserInfo(data);
		});
	}
	vertifyStatus(friends, account){
		var tmp = false;
		friends.map((item) => {
			item.account == account ? (tmp = true) : {};
		})
		return tmp;
	}
	agreeFriendApply(accounts,e){
		e.target.style.display = 'none';
		this.props.addFriend(accounts)
	}
	render(){
		const { currentPage, userInfo } = this.props;
		if(!currentPage) return null;
		const slideClassNames = classNames({
			'blue-slide-normal': true,
			'blue-slide': this.props.currentPage == 'NOTIFY-PAGE'
		})
		const notifyLists = userInfo.notify.map((item, index) => {
			const status = this.vertifyStatus(userInfo.friends, item.account);
			const accounts = {
				friendAccount: item.account + '',
				selfAccount: TBZ.USER_ACCOUNT
			}
			const btnEle = !status ? (<div className="friends-status" onClick={(e) => {this.agreeFriendApply(accounts,e)}}>同意</div>) : null;
			return (<li className="friends-list" key={index}>
								<img src={item.avatar || TBZ.DEFAULT_AVATAR} />
								<div className="friends-name">{item.nickname}</div>
								<div className="friends-sign">{item.info || '无～' }</div>
								{btnEle}
						  </li>)
		});
		return (
				<div className="friends">

						<div className="blue-box">
							<div className={slideClassNames}>
								<i className="w-icon-arrow-left" onClick={this.back}></i>
								<p>系统消息</p>
							</div>
						</div>

						<div className="friends-shadow">好友通知</div>
						<div className="friends-lists">
							<ul>
								{notifyLists}	
							</ul>
						</div>
				</div>
		)
	}
}