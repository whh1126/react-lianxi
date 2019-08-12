import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class footer extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() {
		console.log(this)
		return (
			<div className='footer'>
				<NavLink to='/'>首页</NavLink>
				<NavLink to='/shop'>商品</NavLink>
				<NavLink to='/mine'>我的</NavLink>
				<NavLink to='/two'>置顶</NavLink>
			</div>
		);
	}
}

export default footer;