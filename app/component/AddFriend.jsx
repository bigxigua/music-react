import React, { Component } from 'react';
import '../scss/addfriends.scss';
import classNames from 'classnames';

export default class AddFriends extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
		this.back = this.back.bind(this);
	}
	back(){
		return this.props.setPageState('MESSAGELIST-PAGE')
	}
	render(){
		const slideClassNames = classNames({
			'createRoom-head-slide': this.props.currentPage == 'ADDFRIENDS-PAGE'
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
						<input type="text" placeholder="昵称/账号"/>
						<div className="addfriends-btn">搜索</div>
					</div>
					<div className="addfriends-result">
						<p>搜索结果</p>
						<ul>
							<li>
								<img />
							</li>
							<li></li>
							<li></li>
						</ul>
					</div>
				</div>
		)
	}
}