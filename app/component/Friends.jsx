import React, { Component } from 'react';
import '../scss/friends.scss';
import classNames from 'classnames';

export default class Friends extends Component {
	constructor(props){
		super(props);
		this.state = {
			iconSlided: false,
			searchContent: ''
		}
		this.back = this.back.bind(this);
		this.focusHandle = this.focusHandle.bind(this);
		this.blurHandle = this.blurHandle.bind(this);
		this.changeHandle = this.changeHandle.bind(this);
		this.createPrivateRoom = this.createPrivateRoom.bind(this);
	}
	back(){
		return this.props.setPageState('MESSAGELIST-PAGE')
	} 
	focusHandle(){
		this.setState({
			iconSlided: true
		})
	}
	blurHandle(){
		if(this.state.searchContent == ''){
			this.setState({
				iconSlided: false
			})
		}
	}
	changeHandle(e){
		this.setState({
			searchContent: e.target.value
		})
	}
	createPrivateRoom(roomName){
		let hasRoom = false;
		//房间号就以对方的昵称为名字
		//房间不存在就创建，存在就直接进入
		//此时创建的房间是私聊需要加以区分
		this.props.roomLists.map((item) => {
			item.roomName == roomName ? (hasRoom = true) : {};
		})
		if(!hasRoom) {
			this.props.createRoomAction({
				roomName: roomName,
				account: TBZ.USER_ACCOUNT,
				isPrivateRoom: true
			})
		}
		this.props.setPageState('CHATROOM-PAGE');
		this.props.setUserCurRoom(roomName);
		
	}
	render(){
		const { friends } = this.props.userInfo;
		if(!friends) return null;
		const iconsClassNames = classNames({
			'friends-icons animated': true,
			'friends-icons-slide': this.state.iconSlided
		})
		const friendsLists = friends.map((item, index) => {
			return (
				<li className="friends-list" key={index} onClick={() => {this.createPrivateRoom(item.nickname)}}>
						<img src={item.avatar || TBZ.DEFAULT_AVATAR} />
						<div className="friends-name">{item.nickname}</div>
						<div className="friends-sign">个性签名：{item.info || '好好学习，天天向上'}</div>
				</li>
				)
		})
		return (
				<div className="friends">
						<div className="friends-search">
								<div className="friends-inputs">
									<div className={iconsClassNames}>
										<i className="w-icon-search"></i>
										<span>搜索</span>
									</div>
									<input 
									onFocus={this.focusHandle}
									onKeyUp={this.changeHandle}
									onBlur={this.blurHandle}	 />
								</div>
						</div>
						<div className="friends-shadow"></div>
						<div className="friends-lists">
							<ul>
									{friendsLists}
							</ul>
						</div>
						<div className="friends-back" onClick={this.back}>返回</div>
				</div>
		)
	}
}