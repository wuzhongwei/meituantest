import { COMMENT_LIST_DATA } from '../../constants/aperpolicy';

let initital = {
  commentData: {},
  commentList: [],
}

const comment = (state = initital, action) => {
	const { type, obj } = action

	switch(type) {
    case COMMENT_LIST_DATA:
      let list = []; 
      if (state.commentList.length>0) {
        list = state.commentList.concat(obj.data.comments);
      } else {
        list = obj.data.comments;
      }
			return {...state, commentData: obj.data, commentList: list }
		default:
			return state;
	}
}

export default comment;
