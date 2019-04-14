import { combineReducers } from 'redux';
import fillIn from './fillIn';
import category from './category';
import contentList from './contentList';
export default combineReducers({
  fillIn,
  category,
  contentList
});
