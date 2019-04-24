import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/aperpolicy/aper';
class ShopBar extends Component {

	getAllPrice() {
		let listData = this.props.listData.food_spu_tags || [];
		let totalPrice = 0;
		let dotNum = 0;
		let chooseList = [];

		for(let i=0; i < listData.length; i++) {
			let spus = listData[i].spus || [];
			for(let j=0;j<spus.length; j++) {
				let chooseCount = spus[j].chooseCount;

				if (chooseCount>0) {
					dotNum += chooseCount;
					chooseList.push(spus[j]);
					spus[j]._index = j;
					spus[j].outIndex = i;
					totalPrice += spus[j].min_price * chooseCount;
				}
			}
		}
		return {
			dotNum,
			totalPrice,
			chooseList

		}
	}
	renderItem(data){
		const arr = data.chooseList || [];
		return arr.map((item, index) => {
			return( 
				<div className="choose-item" key={index}>
					<div className="item-name">{item.name}</div>
					<div className="price">¥{item.min_price * item.chooseCount}</div>
					<div className="select-content">
						{
							<div className="minus" onClick={() => {
								this.props.minusSelectItem({
									index: item._index,
									outIndex: item._outIndex
								})
							}}></div>
						}
						{
							<div className="count">{item.chooseCount}</div>
						}
						<div className="plus" onClick={() => {
							this.props.addSelectItem({
								index: item._index,
								outIndex: item._outIndex
							})
						}}></div>
					</div>
				</div>
			)
		})
	}
	render() {
		const shipping_fee = this.props.listData.poi_info ? this.props.listData.poi_info.shipping_fee : 0;
		let data = this.getAllPrice();

		return (
			<div className="shop-bar">
				{
					this.props.showContent ? 
					<div className="choose-content">
						<div className="content-top">
							<div className="clear-car" onClick={() => {
								this.props.clearCar();
								this.props.showChoose({
									showContent:false
								})
							}}>清空购物车</div>
						</div>
						{
							this.renderItem(data)
						}
					</div> : null
				}
				<div className="bottom-content">
					<div className="shop-icon"
						onClick={() => {
							
							let flag = this.props.showContent;

							this.props.showChoose({
								showContent: !flag
							})
						}}
					>
						{
							data.dotNum > 0 ? <div className="dot-num">{data.dotNum}</div> : null
						}
					</div>
					<div className="price-content">
						<p className="total-price">¥{data.totalPrice}</p>
						<p className="other-price">另需配送&nbsp;¥{shipping_fee}</p>
					</div>
					<div className="submit-btn">去结算</div>
				</div>
			</div>
		);
	}
}

export default connect(state => ({...state.aperpolicy.menu}), actions)(ShopBar);

