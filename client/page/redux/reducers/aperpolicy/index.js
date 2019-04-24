import { combineReducers } from 'redux';
import fillIn from './fillIn';
import category from './category';
import contentList from './contentList';
import order from './order';
import sort from './sort';
import sortContentList from './sortContentList';
import details from './details';
import menu from './menu';
import comment from './comment';
import restanurant from './restanurant';
export default combineReducers({
  fillIn,
  category,
  contentList,
  order,
  sort,
  sortContentList,
  details,
  menu,
  comment,
  restanurant
});
