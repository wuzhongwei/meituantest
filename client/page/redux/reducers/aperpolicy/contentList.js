import { CONTENT_LIST } from '../../constants/aperpolicy';

let initital = {
  items: []
}

const contentList = (state = initital, action) => {
	const { type, items  } = action

	switch(type) {
		case CONTENT_LIST:
			return { ...state, items };
		default:
			return state;
	}
}

export default contentList;
