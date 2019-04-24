import { CONTENT_ORDER } from '../../constants/aperpolicy';

let initital = {
  items: []
}

const order = (state = initital, action) => {
	const { type, items, page } = action

	switch(type) {
		case CONTENT_ORDER:
      if (page === 0) {
				return { ...state, items, page };
			} else {
				return { items: state.items.concat(items), page };
			}
		default:
			return state;
	}
}

export default order;
