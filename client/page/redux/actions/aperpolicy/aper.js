import axios from 'axios';
import {
	CHANGE_TAB, 
	CATE_GORY,
	CONTENT_LIST,
	CONTENT_ORDER,
	SORT_CHANGE_TAB,
	GET_FILTER_DATA,
	CHANGE_FILTER,
	GET_LIST_DATA,
	MENU_GET_LIST_DATA,
	MENU_LEFT_CLICK,
	ADD_SELECT_ITEM,
	MINUS_SELECT_ITEM,
	SHOW_CHOOSE_COUNTENT,
	CLEAR_CAR,
	COMMENT_LIST_DATA,
	RESTANURANT_DATA
} from '../../constants/aperpolicy';

const changeDetail = (index) => ({ // tab切换
	type: CHANGE_TAB,
	activeKey: index,
});

const setCategory = (items) => ({ // 
	type: CATE_GORY,
	items,
});

const setContentList = (items,page) => ({ // 
	type: CONTENT_LIST,
	items,
	page
});

const setSortContentList = (obj) => ({ // 
	type: GET_LIST_DATA,
	...obj,
});

const setOrder= (items,page) => ({ // 
	type: CONTENT_ORDER,
	items,
	page
});

const setSort = (key,closePanel) => ({ 
	type: SORT_CHANGE_TAB,
	activeKey: key,
	closePanel
});
const setChanggeFiltera = (item, key) => ({ 
	type: CHANGE_FILTER,
	item,
	key
});

const setFilter = (data) => ({ 
	type: GET_FILTER_DATA,
	filterData: data
});

export const changeTab = (index) => (dispath => {
	dispath(changeDetail(index))
});

export const getCategory = () => {
	return (dispath) => {
		axios({
			method: 'get',
			url: '/api/json/head.json'
		}).then(({data}) => {
	
			if (data.code === 0) {
				dispath(setCategory(data.data.primary_filter));
			} else {
				console.log('获取数据失败')
			}
		})
	}
}

export const getContentList = (page) => {
	return (dispath) => {
		axios({
			method: 'get',
			url: '/api/json/list.json'
		}).then(({data}) => {
	
			if (data.code === 0) {
			//	setTimeout(() => {
					dispath(setContentList(data.data.poilist, page));
			//	},3000)

			} else {
				console.log('获取数据失败')
			}
		})
	}
}

export const getOrder = (page) => {
	return (dispath) => {
		axios({
			method: 'get',
			url: '/api/json/orders.json'
		}).then(({data}) => {
	
			if (data.code === 0) {
			//	setTimeout(() => {
					dispath(setOrder(data.data.digestlist, page));
			//	},3000)

			} else {
				console.log('获取数据失败')
			}
		})
	}
}

export const getSort = (key,closePanel) => {
	return (dispath) => {
		dispath(setSort(key,closePanel));
	}
}

export const getFilterData= (page) => {
	return (dispath) => {
		axios({
			method: 'get',
			url: '/api/json/filter.json'
		}).then(({data}) => {
	
			if (data.code === 0) {
			
			//	setTimeout(() => {
					dispath(setFilter(data.data));
			//	},3000)

			} else {
				console.log('获取数据失败')
			}
		})
	}
}

export const changeFilter = (item, key) => {
	return (dispath) => {
		dispath(setChanggeFiltera(item, key));
	}
}

export const getSortContentlist = (obj) => {
	return (dispath, getState) => {
		let url = '/api/json/list.json';

		if (obj.filterData || getState().aperpolicy.sortContentList.filterData) {
			url = '/api/json/listparams.json';
		}
		axios({
			method: 'get',
			url: url
		}).then(({data}) => {
	
			if (data.code === 0) {
					// console.log(3333, obj.toFirstPage)
					dispath(setSortContentList({
						filterData: obj.filterData,
						toFirstPage: obj.toFirstPage,
						items: data.data
					})); 

			} else {
				console.log('获取数据失败')
			}
		})
	}
}

export const getMenuData = () => {
	return (dispath) => {

		axios({
			method: 'get',
			url: '/api/json/food.json'
		}).then(({data}) => {
	
			if (data.code === 0) {
				
					dispath({
						type: MENU_GET_LIST_DATA,
						obj: data
					}); 

			} else {
				console.log('获取数据失败')
			}
		})
	}
}

export const itemClick = (obj) => {
	return (dispath) => {
		dispath({
			type: MENU_LEFT_CLICK,
			obj
		}); 
	}
}

export const addSelectItem = (obj) => {
	return (dispath) => {
		dispath({
			type: ADD_SELECT_ITEM,
			obj
		}); 
	}
}

export const minusSelectItem = (obj) => {
	return (dispath) => {
		dispath({
			type: MINUS_SELECT_ITEM,
			obj
		}); 
	}
}

export const showChoose = (obj) => {
	return (dispath) => {
		dispath({
			type: SHOW_CHOOSE_COUNTENT,
			obj
		}); 
	}
}

export const clearCar = (obj) => {
	return (dispath) => {
		dispath({
			type: CLEAR_CAR,
			obj
		}); 
	}
}

export const getComment = (obj) => {
	return (dispath) => {

		axios({
			method: 'get',
			url: '/api/json/comments.json'
		}).then(({data}) => {
			if (data.code === 0) {
					dispath({
						type: COMMENT_LIST_DATA,
						obj: data
					}); 
			} else {
				console.log('获取数据失败')
			}
		})
	}
}

export const getRestanurant = (obj) => {
	return (dispath) => {

		axios({
			method: 'get',
			url: '/api/json/restanurant.json'
		}).then(({data}) => {
			if (data.code === 0) {
					dispath({
						type: RESTANURANT_DATA,
						obj: data
					}); 
			} else {
				console.log('获取数据失败')
			}
		})
	}
}

