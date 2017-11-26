import React, { Component } from 'react';
import './InputArea.scss'

export default class InputArea extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (<div className="InputArea-container">
							<div className="InputArea-more-feature">
									<i className="w-icon-plus-circle-o"></i>
							</div>
							<div className="InputArea-input-box">
									<input className="InputArea-input" placeholder="输入消息，使用⌃/⌘ + enter输入表情" />
									<i className="w-icon-smile-o"></i>
							</div>
							<div className="InputArea-send">
									<i className="w-icon-enter"></i>
							</div>
						</div>)
	}
}