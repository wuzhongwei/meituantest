// import { CHANGE_TAB } from '../../constants/aperpolicy';
import TABKEY from '../../../detailsConfig';
let initital = {
  tabs: [
		{
			name: '点菜',
			key: TABKEY.menu
		},
		{
			name: '评价',
			key: TABKEY.comment
		},
		{
			name: '我的',
			key: TABKEY.restanurant
		},
	],
	// activeKey: TABKEY.menu
}

const details = (state = initital, action) => {
	const { type } = action

	switch(type) {
		default:
			return state;
	}
}

export default details;
