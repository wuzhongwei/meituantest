import { MENU_GET_LIST_DATA, MENU_LEFT_CLICK, ADD_SELECT_ITEM, MINUS_SELECT_ITEM,SHOW_CHOOSE_COUNTENT, CLEAR_CAR } from '../../constants/aperpolicy';

let initital = {
  listData: {},
  currentLeftIndex: 0,
  showContent: false,
  poiInfo: {}
}

const dealWithSelectItem = (state, action, type) => {
  let listData = state.listData;
  let list = listData.food_spu_tags || [];
  let currentItem = list[action.outIndex || state.currentLeftIndex];
  if (type === ADD_SELECT_ITEM) {
    currentItem.spus[action.obj.index].chooseCount++;
  } else {
    currentItem.spus[action.obj.index].chooseCount--;
  }
  
  let _listData = JSON.parse(JSON.stringify(listData));
  return { ...state, listData: _listData };
}

const menu = (state = initital, action) => {
	const { type, obj } = action

	switch(type) {
    case MENU_GET_LIST_DATA:
      if (Object.keys(state.listData).length>0) {
        return {...state};
      }

      return { ...state, poiInfo: obj.data.poi_info, listData: obj.data };
    case CLEAR_CAR:
      let listData = state.listData;
      let list = listData.food_spu_tags || [];
      for(let i=0; i < list.length; i++) {
        let spus = list[i].spus || [];
        for(let j=0;j<spus.length; j++) {
          spus[j].chooseCount = 0;
        }
      }

      return { ...state, listData: JSON.parse(JSON.stringify(listData)) };
    case SHOW_CHOOSE_COUNTENT:
      return { ...state, showContent: obj.showContent };
    case ADD_SELECT_ITEM: 
      return dealWithSelectItem(state, action, ADD_SELECT_ITEM);
    case MINUS_SELECT_ITEM: 
      return dealWithSelectItem(state, action, MINUS_SELECT_ITEM);
    case MENU_LEFT_CLICK:
			return { ...state, currentLeftIndex: obj.currentLeftIndex };
		default:
			return state;
	}
}

export default menu;
