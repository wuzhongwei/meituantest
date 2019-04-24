import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/aperpolicy/aper';
import MenuItem from './MenuItem';
import ShopBar from '../ShopBar';
class Menu extends Component {
	
	constructor(props) {
		super();
		props.getMenuData();
	}
	renderRightList(arr) {
		let _arr = arr || [];
		return _arr.map((item, index) => {
			if (!item.chooseCount) {
				item.chooseCount = 0;
			}
			return <MenuItem key={index} data={item} _index={index}>{item.name}</MenuItem>
		})
	}
	itemClick(index) {
		this.props.itemClick({
			currentLeftIndex: index
		});
	}
	rightRender() {
		let index = this.props.currentLeftIndex;
		let arr = this.props.listData.food_spu_tags || [];
		let currentItem = arr[index];
		
		if (currentItem) {
			let title = <p key={1} className="right-title">{currentItem.name}</p>;
			return [
				title,
				<div key={2} className="right-list">
					<div className="right-list-inner">
						{this.renderRightList(currentItem.spus)}
					</div>
				</div>
			];
		}
		return null;
	}
	renderLeft() {
		const list = this.props.listData.food_spu_tags || [];
		return list.map((item, index) => {
			let cls = this.props.currentLeftIndex === index ? 'left-item active' : 'left-item';
			return (
				<div 
					key={index} 
					className={cls}
					onClick={() => {
						this.itemClick(index)
					}}	
				>
					<div className="item-text">
						{
							item.icon ? <img className="img-icon" src={item.icon} alt=""/> : null
						}
						{
							item.name
						}
					</div>
				</div>
			)
		})

	}
	render() {
		// console.log(this.props)
		return (
			<div className="menu-inner">
				<div className="left-bar">
					<div className="left-bar-inner">
						{this.renderLeft()}
					</div>
				</div>
				<div className="right-content">
					{this.rightRender()}
				</div>
				<ShopBar></ShopBar>
			</div>
		);
	}
}

export default connect(state => ({...state.aperpolicy.menu}), actions)(Menu);
// export default Menu;

