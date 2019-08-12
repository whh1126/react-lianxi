import React, { Component } from 'react';
import axios from 'axios';
class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}
	render() {
		console.log(this.props.match.params)
		const { value } = this.state;
		return (
			<div className='home'>
				{value}
			</div>
		);
	}
	componentDidMount() {
		axios.post('/api/detail', (this.props.match.params)).then(({data}:res) => {
			this.setState({
				value: data
			})
		})
	}
}

export default index;