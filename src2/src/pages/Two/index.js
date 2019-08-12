import React, { Component } from 'react';
import BScroll from 'better-scroll';
import Axios from 'axios';
class Two extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		};
	}
	render() {
		const { list } = this.state;
		return (
			<div className='shop' ref={box => this.box = box}>
				<div className='box'>
					<div className='title' ref={title => this.title = title}>顶部</div>
					{list && list.map((item, index) =>
						(<div key={index}>
							<img src={item.img} alt="" />
							<p>{item.name}</p>
						</div>)
					)}
				</div>
			</div>
		);
	}
	componentDidMount() {
		Axios.get('/api/li').then(res => {
			this.setState({
				list: res.data.list
			})
		})
		this._scroll = new BScroll(this.box, {
			click: true,
			proboType: 3
		})
		// console.log(this.props.history)
		this._scroll.on('scrollStart',this.scrollFn)
	}
	scrollFn=()=>{
		if(Math.abs(this._scroll.y)>45){
			this.title.className='title xi';
			console.log(this.title)
		}else{
			this.title.className='title'

		}
	}
	
}

export default Two;