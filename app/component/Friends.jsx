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
	render(){
		const iconsClassNames = classNames({
			'friends-icons animated': true,
			'friends-icons-slide': this.state.iconSlided
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
									<li className="friends-list">
											<img src={TBZ.DEFAULT_AVATAR} />
											<div className="friends-name">天啊啊打</div>
											<div className="friends-sign">个性签名：好好学习，天天像桑</div>
									</li>
									<li className="friends-list">
											<img src={TBZ.DEFAULT_AVATAR} />
											<div className="friends-name">天啊啊打</div>
											<div className="friends-sign">个性签名：好好学习，天天像桑</div>
									</li>
									<li className="friends-list">
											<img src={TBZ.DEFAULT_AVATAR} />
											<div className="friends-name">天啊啊打</div>
											<div className="friends-sign">个性签名：好好学习，天天像桑</div>
									</li>
									<li className="friends-list">
											<img src={TBZ.DEFAULT_AVATAR} />
											<div className="friends-name">天啊啊打</div>
											<div className="friends-sign">个性签名：好好学习，天天像桑</div>
									</li>
							</ul>
						</div>
				</div>
		)
	}
}