import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/aperpolicy/aper';
import Icon from '../../../../components/Icon';
import TABKEY from "../config";

class Header extends Component {
	constructor(props) {
		super();
		props.getFilterData();
	}

	changeDoFilter(item, key, list) {
		this.revertActive(key, list);
		item.active = true;
		this.props.getSort(key, true);
		this.props.changeFilter(item, key);
		// console.log('this.props', this.props)
		// alert(33)
		this.props.getSortContentlist({
			filterData: item,
			toFirstPage: true,
		});
	}
	revertActive(key, list) {
		if (key === TABKEY.cate) {
			for(let i = 0; i < list.length; i++) {
				for(let j = 0; j < list[i].sub_category_list.length; j++){
					list[i].sub_category_list[j].active = false;
				}
			}
		} else if (key === TABKEY.type) {
			for(let k = 0; k < list.length; k++) {
				list[k].active = false;
			}
		} else {
			for(let i = 0; i < list.length; i++) {
				for(let j = 0; j < list[i].items.length; j++){
					list[i].items[j].active = false;
				}
			}
		}
	}
	changeTab(key) {
		let closePanel = false;

		if (this.props.activeKey === key && !this.props.closePanel) {
			closePanel = true;
		}
		
		this.props.getSort(key, closePanel);
	
	}
	renderTabs(){
		const {tabs, activeKey, closePanel} = this.props;
		const arr = [];
		
		for (let key in tabs) {
			const item = tabs[key];

			const cls = item.key + ' item';
			if (item.key === activeKey && !closePanel) {
				cls += ' current';
			}

			arr.push(
				<div className={cls} key={item.key} onClick={() => {
					this.changeTab(item.key)
				}}>
					{item.text}  <Icon type={item.key==='filter' ? 'filter' : 'downArrow'} />
				</div>
			)
		}

		return arr;
	}

	renderCateInnerContent(item, cateList) {
		return item.sub_category_list.map((item1,index) => {
			const cls = item1.active ? 'cate-box-inner active' : 'cate-box-inner';
			return (
				<div className="cate-box" key={index} onClick={() => {
					this.changeDoFilter(item1, TABKEY.cate, cateList)
				}}>
					<div className={cls}>
						{
							item1.name
						}
						({
							item1.quantity
						})
					</div>
				</div>
			)
		})
	}

	readerCateContent() {
		//console.log(this.props.filterData)
		let cateList = this.props.filterData.category_filter_list || [];
		return cateList.map((item, index) => {
			return (
				<li key={index} className="cate-item">
					<p className="item-title">
						{
							item.name
						}
						<span className="item-count">{item.quantity}</span>
					</p>
					<div className="item-content">
						{
							this.renderCateInnerContent(item, cateList)
						}
					</div>
				</li>
			)
		})
	}
	readerTypeContent(){
		
		let cateList = this.props.filterData.sort_type_list || [];
	
		return cateList.map((item, index) => {
			const cls = item.active ? 'type-item active' : 'type-item'
			return (
				<li className={cls} key={index}  onClick={() => {
					this.changeDoFilter(item, TABKEY.type, cateList)
				}}>
					{
						item.name
					}
				</li>
			)
		})

	}
	renderFilterInnerContent(items, filterList) {
		return items.map((item, index) => {
			let cls = item.icon ? 'cate-box-inner has-icon' : 'cate-box-inner';
			if (item.active) {
				cls += ' active';
			}
		
			return (
				<div key={index} className="cate-box" onClick={() => {
					this.changeDoFilter(item, TABKEY.filter, filterList)
				}}>
					<div className={cls}>
					{item.icon ? <img src={item.icon} /> : ''}	{item.name}
					</div>
				</div>
			)
		})
	}
	readerFilterContent(){
		let filterList = this.props.filterData.activity_filter_list || [];

		return filterList.map((item, index) => {

			return (
				<li className="filter-item" key={index}>
					<p className="filter-title">
					{
						item.group_title
					}
					</p>
					<div className="item-content">
						{
							this.renderFilterInnerContent(item.items,filterList)
						}
					</div>
				</li>
			)
		})

	}

	renderContent() {
		const {tabs, activeKey} = this.props;
		const arr = [];
		for(let key in tabs) {
			const item = tabs[key];
			const cls = item.key + '-panel';

			if (item.key === activeKey) {
				cls += ' current';
			}

			if (item.key === TABKEY.cate) {
				arr.push(
					<ul key={item.key} className={cls}>
						{
							this.readerCateContent()
						}
					</ul>
				)
			}
			else if (item.key === TABKEY.type) {
				arr.push(
					<ul key={item.key} className={cls}>
						{
							this.readerTypeContent()
						}
					</ul>
				)
			} else if (item.key === TABKEY.filter) {
				arr.push(
					<ul key={item.key} className={cls}>
						{
							this.readerFilterContent()
						}
					</ul>
				)
			}
		}

		return arr;
	}

	render() {
		let cls = 'panel';
		const {closePanel} = this.props;
		if (!closePanel) {
			cls += ' show';
		} else {
			cls += ''
		}
		return (
			<div className="sort-header">
				<div className="header-top">
					{
						this.renderTabs()
					}
				</div>
				<div className={cls}>
					<div className="panel-inner">
						{
							this.renderContent()
						}
					</div>
				</div>
			</div>
		);
	}
}

export default connect(state => ({...state.aperpolicy.sort}), actions)(Header);

