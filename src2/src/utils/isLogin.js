import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
const isLogin = Wrap =>
	class extends Component {
		render() {
			return window.localStorage.getItem('isLogin')?(
				<Wrap {...this.props}></Wrap>
			):(
				<Redirect to='/login'/>
			)
		}
	}
export default isLogin; 
