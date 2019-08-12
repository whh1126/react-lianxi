import React, { Component } from 'react';
import isLogin from '../../utils/isLogin';

class Mine extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='mine'>
				mine
			</div>
		);
	}
}

export default isLogin(Mine);