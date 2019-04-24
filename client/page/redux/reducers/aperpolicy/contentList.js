import { CONTENT_LIST } from '../../constants/aperpolicy';

let initital = {
	items: [],
	page: 0 // 分页
}

const contentList = (state = initital, action) => {
	const { type, items, page } = action

	switch(type) {
		case CONTENT_LIST:
			if (page === 0) {
				return { ...state, items, page };
			} else {
				return { items: state.items.concat(items), page };
			}
			
		default:
			return state;
	}
}

export default contentList;
