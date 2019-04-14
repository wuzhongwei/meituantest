import { CHANGE_TAB } from '../../constants/aperpolicy';
import TABKEY from '../../../config';
let initital = {
  tabs: [
		{
			name: '首页',
			key: TABKEY.home
		},
		{
			name: '订单',
			key: TABKEY.order
		},
		{
			name: '我的',
			key: TABKEY.my
		},
	],
	activeKey: TABKEY.home
}

const fillIn = (state = initital, action) => {
	const { type, activeKey } = action

	switch(type) {
		case CHANGE_TAB:
			return { ...state, activeKey };
		default:
			return state;
	}
}

export default fillIn;
