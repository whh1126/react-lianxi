import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Mine from '../pages/Mine';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Two from '../pages/Two';
const route = [
	{
		path: '/shop',
		component: Shop,
		navName: '商品'
	},
	{
		path: '/mine',
		component: Mine,
		navName: '我的'
	},
	{
		path: '/detail/:id',
		component: Detail
	},
	{
		path: '/two',
		component: Two,
		navName: '置顶',
	},
	{
		path: '/login',
		component: Login,
	}, {
		path: '/',
		component: Home,
		navName: '首页',
	}
]

export default route