import React, { Component } from 'react';
import './ChatItem.scss'
import Hammer from 'hammerjs';

import { getCss } from '../util.js';
 
const DEFAULT_GROUP_AVATAR = 'http://oj7h98lzb.bkt.clouddn.com/download.svg';
const EXPAND_CLASS = 'ChatListItem-Item-expand';

export default class ChatItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			info: this.props.data
		}
		this.formatTime = this.formatTime.bind(this);
		this.unExpand = this.unExpand.bind(this);
		this.signAsUnread = this.signAsUnread.bind(this);
		this.deleteElement = this.deleteElement.bind(this);
	}

	formatTime(time){
		const _time = time.replace(/-/g, '-');
		const hour = new Date(_time).getHours();
		const chatTime = hour <= 6 ? '凌晨' 
		       : hour <= 9 ? '清晨' : hour <= 12 ? '上午' : hour <= 18 ? '下午' 
		       : hour <= '24' ? '晚上' : '外太空' ;
		return `${chatTime}   ${hour}:${new Date(_time).getMinutes()}`
	}

	dragHandle(element){
		const hammer = new Hammer(element);
		hammer.on('panleft', () => {
			this.hasClass(element, EXPAND_CLASS) ? {} : (element.classList.add(EXPAND_CLASS));
		})
		hammer.on('panright', () => {
			this.unExpandHandle(element)
		})
	}

	hasClass(element, className){
		return Array.from(element.classList).indexOf(className) !== -1;
	}

	unExpandHandle(element){
		this.hasClass(element, EXPAND_CLASS) ? (element.classList.remove(EXPAND_CLASS)) : {};
	}

	unExpand(e){
		this.unExpandHandle(this.refs.oDragDiv)
	}

	componentDidMount(){
		this.dragHandle(this.refs.oDragDiv);
	}

	deleteElement(){
		const ele = this.refs.oContainer;
		ele.parentNode.removeChild(ele);
	}

	signAsUnread(){
		this.unExpandHandle(this.refs.oDragDiv);
		const number = this.state.info.unreadNumber > 0 ? '0' : '1';
		this.setState({
			info: Object.assign(this.state.info,{unreadNumber: number})
		})
	}

	render(){
		const info = this.state.info;
		const unReadMessage = info.unreadNumber > 0 ? (<div className="ChatListItem-msg-number">{info.unreadNumber}</div>) : null;
		return (
			<div className="ChatListItem-container" ref="oContainer">
				<div className="ChatListItem-Item" ref="oDragDiv" onClick={this.unExpand}>
						<img src={info.chatAvatar || DEFAULT_GROUP_AVATAR} className="ChatListItem-avatar"/>
						<div className="ChatListItem-msg-box">
								<p>{info.name}</p>
								<p>{info.lastedSpeakerName}: {info.lastedSpeakeWord}</p>
						</div>
						<div className="ChatListItem-time">{this.formatTime(info.lastedTime)}</div>
						{unReadMessage}
				</div>
				<div className="ChatListItem-hidden-element">
						<div className="ChatListItem-hidden-sign" onClick={this.signAsUnread}>
							标为{this.state.info.unreadNumber > 0 ? '已' : '未'}读
						</div>
						<div className="ChatListItem-hidden-del" onClick={this.deleteElement}>删除</div>
				</div>
			</div>
		)
	}
}