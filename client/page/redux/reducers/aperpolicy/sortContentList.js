import { GET_LIST_DATA } from '../../constants/aperpolicy';

let initital = {
	items: [],
  filterData: null,
  page: 0,
  isend: false
}

const sortContentList = (state = initital, action) => {
  let _listData = [];
  
  let _filterData = action.filterData || state.filterData;
  let _page = action.toFirstPage ? 0 : state.page;

  let _isend = false;
	switch(action.type) {
    case GET_LIST_DATA:
      // console.log(action.obj)
			if (_page === 0) {
				_listData = action.items.poilist;
			} else {
        _listData = state.items.concat(action.items.poilist);
      }
      _page = _page + 1;
      if (_page > 3) {
        _isend = true;
      }
      return {...state, items:_listData, filterData: _filterData, page: _page, isend: _isend}
			
		default:
			return state;
	}
}

export default sortContentList;
