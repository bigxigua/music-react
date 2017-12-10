import React, { Component } from 'react';
import '../scss/createroom.scss'
import classNames from 'classnames'

export default class createRoom extends Component {
	constructor(props){
		super(props);
		this.state = {
			roomName: '',
			disable: true
		}
		this.back = this.back.bind(this);
		this.confirmCreate = this.confirmCreate.bind(this);
		this.getRoomName = this.getRoomName.bind(this);
	}
	back(){
		return this.props.setPageState('MESSAGELIST-PAGE')
	}
	getRoomName(e){
		this.setState({
			roomName: e.target.value.trim()
		})
	}
	confirmCreate(){
		const roomName = this.state.roomName;
		if (!roomName) return;
		this.props.createRoomAction({
			roomName: roomName,
			account: localStorage.getItem('account')
		})
	}
	componentDidMount(){
		
	}
	render(){
		const slideClassNames = classNames({
			'createRoom-head-slide': this.props.currentPage == 'CREATE-ROOM-PAGE'
		})
		const buttonClassName = classNames({
			'createRoom-submit': true,
			'createRoom-submit-true': this.state.roomName.length > 0
		})
		return (<div className="createRoom-content">
							<div className="createRoom-head">
								<div className={slideClassNames}>
									<i className="w-icon-arrow-left" onClick={this.back}></i>
									<p>创建群组</p>
								</div>
							</div>
							<div className="createRoom-add">
								<div	className="createRoom-circle">
										<div className="createRoom-line-heng"></div>
										<div className="createRoom-line-zong"></div>
								</div>
							</div>
							<div className="createRoom-input">
								<input type="text" placeholder="取个名字吧" maxLength="15" autoComplete="off" onChange={this.getRoomName} />
								<span>{15 - this.state.roomName.length}</span>
							</div>
							<div className={buttonClassName} onClick={this.confirmCreate}>提交</div>
						</div>)
	}
}