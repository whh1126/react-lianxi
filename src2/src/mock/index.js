import Mock from 'mockjs';

const data = Mock.mock({
	'list|20': [{
		id: '@guid',
		name: '@cname',
		img: "@image('100x100', '@color')"
	}]
})

Mock.mock('/api/li', {
	'list|20': [{
		id: '@guid',
		name: '@cname',
		img: "@image('100x100', '@color')"
	}]
})

Mock.mock('/api/list', ({ body }) => {
	const { page, num } = JSON.parse(body);
	let start = page - 1;
	let end = start + num;
	let datas = data.list.slice(start, end);
	// console.log(datas)
	if (page < 5) {
		return {
			list: datas
		}
	}
	return {
		list: []
	}
})

Mock.mock('/api/detail', ({ body }) => {
	const { id } = JSON.parse(body)
	if (id) {
		return '详情'
	} else {
		return 'error'
	}
})
Mock.mock('/api/search', ({ body }) => {
	const { value } = JSON.parse(body)
	console.log(data)
	let arr = [];
	data.list.map(item => {

		if (item.name.includes(value)) {
			return arr.push(item)
		}
		return arr
	})

	if (arr) {
		return {
			list: arr
		}
	} else {
		return {
			list: []
		}
	}
})