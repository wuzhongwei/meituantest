import { CATE_GORY } from '../../constants/aperpolicy';

let initital = {
  items: []
}

const category = (state = initital, action) => {
	const { type, items  } = action

	switch(type) {
		case CATE_GORY:
			return { ...state, items };
		default:
			return state;
	}
}

export default category;
