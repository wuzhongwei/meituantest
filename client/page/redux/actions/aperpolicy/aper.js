import axios from 'axios';
import {
	CHANGE_TAB, 
	CATE_GORY,
	CONTENT_LIST
} from '../../constants/aperpolicy';

const changeDetail = (index) => ({ // tab切换
	type: CHANGE_TAB,
	activeKey: index,
});

const setCategory = (items) => ({ // 
	type: CATE_GORY,
	items,
});

const setContentList = (items) => ({ // 
	type: CONTENT_LIST,
	items,
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

export const getContentList = () => {
	return (dispath) => {
		axios({
			method: 'get',
			url: '/api/json/listparams.json'
		}).then(({data}) => {
	
			if (data.code === 0) {
				dispath(setContentList(data.data.poilist));

			} else {
				console.log('获取数据失败')
			}
		})
	}
}
