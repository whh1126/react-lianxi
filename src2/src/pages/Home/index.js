import React, { Component } from 'react';
import Axios from 'axios';
class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			list: []
		};
	}
	render() {
		const { value, list } = this.state;
		return (
			<div className='home'>
				<h1>首页</h1>
				<br />
				<input type="text" value={value} onChange={(e) => this.handleChange(e)} />
				<button onClick={this.handleClick}>
					搜索
				</button>
				{list.map(item => (
					<div key={index}>
						<img src={item.img} alt="" />
						<p>{item.name}</p>
					</div>
				))}
			</div>
		);
	}
	handleChange = e => {
		this.setState({
			value: e.target.value
		})
	}
	handleClick = () => {
		Axios.post('/api/search', { value: this.state.value }).then(res => {
			console.log(res)
			
			this.setState({
				list: [...res.data.list]
			})
		})
	}
	componentDidMount() {
		// Axios.post('/api')
	}
}

export default index;