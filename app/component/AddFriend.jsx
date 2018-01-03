import React, { Component } from 'react';
import '../scss/addfriends.scss';
import classNames from 'classnames';

let myApplyLists = [];

export default class AddFriends extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: ''
		}
		this.back = this.back.bind(this);
		this.search = this.search.bind(this);
		this.changehandle = this.changehandle.bind(this);
	}
	back(){
		return this.props.setPageState('MESSAGELIST-PAGE')
	}
	changehandle(e){
		var _value = e.target.value.trim();
		this.setState({
			value: _value
		})
	}
	search(){
		let nickname = this.state.value;
		if(!nickname) return;
		this.props.searchUsers(nickname);
	}
	verifyFriends(account){
		let tmp = false;
		myApplyLists = this.props.myApplyLists;
		account == TBZ.USER_ACCOUNT ? (tmp = true) : {};
		myApplyLists.map((item) => {
			item.account == account ? (tmp = true) : {};
		});
		return tmp;
	} 
	applyFriend(accounts, e){
		e.target.style.display = 'none';
		this.props.applyFriend(accounts)
	}
	render(){
		const slideClassNames = classNames({
			'createRoom-head-slide': this.props.currentPage == 'ADDFRIENDS-PAGE'
		})
		const lists = this.props.searchResults.map((item, index) => {
			let isSended = this.verifyFriends(item.account);
			let addButton;
			let accounts = {
				friendAccount: item.account + '',
				selfAccount: TBZ.USER_ACCOUNT
			}
			isSended ? (addButton = null) : (addButton = (<div className='addfriends-add' onClick={(e) => {this.applyFriend(accounts,e)}}>添加</div>));
			return (
				<li key={index}>
					<img src={item.avatar || TBZ.DEFAULT_AVATAR} className="addfriends-avatar" />
					<div className="addfriends-right">
							<div className="addfriends-name">{item.nickname}</div>
										<div className="addfriends-icon">
												<div className="sex">
													<i className="w-icon-man"></i>
													<span>{item.sex == '未知' ? '男' : item.sex}</span>
												</div>
										</div>
										<div className="addfriends-desc">{item.info || '还没有签名哟～'}</div>
							</div>
							{addButton}		
				</li>
			)
		})
		return (
				<div className="addfriends">
					<div className="createRoom-head">
						<div className={slideClassNames}>
							<i className="w-icon-arrow-left" onClick={this.back}></i>
							<p>添加好友</p>
						</div>
					</div>
					<div className="addfriends-search">
						<input type="text" placeholder="昵称/账号" onChange={this.changehandle}/>
						<div className="addfriends-btn" onClick={this.search}>搜索</div>
					</div>
					<div className="addfriends-result">
						<p>搜索结果</p>
						<ul>
							{lists}
						</ul>
					</div>
				</div>
		)
	}
}