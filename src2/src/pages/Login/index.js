import React, { Component } from 'react';
class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			pwd: ''
		};
	}
	render() {
		const { name, pwd } = this.state
		return (
			<div className='home'>
				<input type="text" value={name} onChange={(e) => this.handleChange('name', e)} />
				<br />
				<input type="password" name={pwd} onChange={(e) => this.handleChange('pwd', e)} />
				<br />
				<button onClick={this.handleClick}>登录</button>
			</div>
		);
	}
	handleChange = (type, e) => {
		this.setState({
			[type]: e.target.value
		})
	}
	handleClick = () => {
		window.localStorage.setItem('isLogin', this.state.name)
	}
}

export default index;