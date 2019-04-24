import { RESTANURANT_DATA } from '../../constants/aperpolicy';

let initital = {
  resData: []
}

const restanurant = (state = initital, action) => {
	const { type, obj } = action

	switch(type) {
		case RESTANURANT_DATA:
      return {...state, resData: obj.data };
		default:
			return state;
	}
}

export default restanurant;
