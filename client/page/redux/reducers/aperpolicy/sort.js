import { SORT_CHANGE_TAB, GET_FILTER_DATA, CHANGE_FILTER } from '../../constants/aperpolicy';
import TABKEY from '../../../meituan/Sort/config';

let tabs = {};
tabs[TABKEY.cate] = {
	key: TABKEY.cate,
	text: '全部分类',
	obj: {}
}
tabs[TABKEY.type] = {
	key: TABKEY.type,
	text: '综合排序',
	obj: {}
}
tabs[TABKEY.filter] = {
	key: TABKEY.filter,
	text: '筛选',
	obj: {}
}
let initital = {
  tabs: tabs,
	activeKey: TABKEY.cate,
	filterData: {},
	closePanel: true
}

const sort = (state = initital, action) => {
	const { type, activeKey, filterData, closePanel, key, item } = action

	switch(type) {
		case SORT_CHANGE_TAB:
			return { ...state, activeKey, closePanel };
		case GET_FILTER_DATA: 
			return { ...state, filterData };
		case CHANGE_FILTER: 
			const _tabs = JSON.parse(JSON.stringify(state.tabs));
			_tabs[key] = {
				key,
				text: item.name,
				obj: item
			}
			return { ...state, tabs: _tabs };
		default:
			return state;
	}
}

export default sort;
