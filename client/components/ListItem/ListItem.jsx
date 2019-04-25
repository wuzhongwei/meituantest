import React, { Component } from "react";
import {Link} from 'react-router-dom';

class ListItem extends Component {
	

	renderBrand(data) {
		if (data.brand_type) {
			return <div className="brand brand-pin">品牌</div>;
		} else {
			return <div className="brand brand-xin">新到</div>;
		}
	}
	renderScore(data) {
		const wm_poi_score = data.wm_poi_score || '';
		const score = wm_poi_score.toString();
		const scoreArr = score.split('.');
		const fullstar = parseInt(scoreArr[0]); // 满星个数
		const halfstar = parseInt(scoreArr[1]) >= 5 ? 1 : 0; // 半星个数
		const nullstar = 5 - fullstar - halfstar; // 0星个数
		const starjsx = [<div key={'xxx'}>{score}</div>];
		for(var i = 0; i <fullstar; i++) {
			starjsx.push(<div key={i+ 'full'} className="star fullstar"></div>)
		}

		if (halfstar) {
			for(var j = 0; j <halfstar; j++) {
				starjsx.push(<div key={j+ 'halfstar'} className="star halfstar"></div>)
			}
		}

		if (nullstar) {
			for(var k = 0; k <nullstar; k++) {
				starjsx.push(<div key={k+ 'nullstar'} className="star nullstar"></div>)
			}
		}

		return starjsx;
	
	}

	renderMoutNum(data) {
		const num = data.poi_total_num;
		if (num > 999) {
			return '999+'
		}
		return num;
	}
	renderMeituanFlag(data) {
		if (data.delivery_type) {
			return <div className="item-meituan-flag">美团转送</div>
		}
		return null;
	}
	renderOthers(data) {
		const arr = data.discounts2;
		return arr.map((item, index) => {
			return (
				<div key={index} className="other-info">
					<img src={item.icon_url} className="other-tag" alt=""/>
					<div className="other-content">{item.info}</div>
				</div>
			)
		})
		
	}
	render() {
		const {itemData} = this.props;
		return (
			<Link to='/details/menu' className="listItem">
				<div className="pd20 scale-1px">
					<img className="item-img" src={itemData.pic_url} alt=""/>
					{this.renderBrand(itemData)}
					<div className="item-info-content">
						<p className="item-title">{itemData.name}</p>
						<div className="item-desc">
							<div className="item-score">
								{
									this.renderScore(itemData)
								}
							</div>
							<div className="item-count">月售{this.renderMoutNum(itemData)}</div>
							<div className="item-distance"> &nbsp; {itemData.distance}</div>
							<div className="item-time">{itemData.mt_delivery_time}&nbsp;|</div>
						</div>
						<div className="item-price">
							<div className="item-pre-price">
							{itemData.min_price_tip}
							</div>
								{
									this.renderMeituanFlag(itemData)
								}
						</div>
						<div className="item-others">
						{
							this.renderOthers(itemData)
						}
						</div>
					</div>
				</div>
			</Link>
		);
	}
}

export default ListItem
