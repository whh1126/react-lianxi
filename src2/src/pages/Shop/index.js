import React, { Component } from 'react';
import BScroll from 'better-scroll';
import axios from 'axios';
import { Link } from 'react-router-dom';
class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			up: false
		};
		this.page = 1;
		this.num = 5;
		this.httpF = false;
	}
	render() {
		console.log(this)
		const { list } = this.state;
		return (
			<div className='shop' ref={box => this.box = box}>
				<div className='box'>
					{list && list.map((item, index) => {
						if (item.length !== 0) {
							return (
								<div key={index}>
									<img src={item.img} alt="" />
									<p>{item.name}</p>
									<Link to={`/detail/${item.id}`}>查看详情</Link>
								</div>
							)
						}
					}
					)}
				</div>
			</div>
		);
	}
	componentDidMount() {
		this.http(1, 5)
		this._scroll = new BScroll(this.box, {
			click: true,
			proboType: 3
		})
		this.scrollEnd()
	}
	http(page, num) {
		axios.post('/api/list', { page: page, num: num }).then(({ data: { list } }) => {
			if (list.length === 0) return;
			this.setState({
				list: [...this.state.list, ...list]
			})
			this.httpF = false;
			this.setState({
				up: false
			})

		})
	}
	scrollEnd() {
		let _this = this;
		this._scroll.on('scrollEnd', function () {
			let page = _this.page;
			if (this.maxScrollY === this.y) {
				if (_this.state.httpF) {
					return;
				}
				_this.setState({
					up: true
				})
				page++;
				_this.http(page, 5)
				_this.httpF = true;
				_this.page = page;
			}
		})
	}
	// componentWillUnmount() {
	// 	this._scroll.refresh()
	// }
}

export default index;