import React, { Component } from "react";


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
			starjsx.push(<div key={i+ 'full'} className="star fullstar">星星</div>)
		}
		console.log(score) 
		return starjsx;
	
	}
	render() {
		const {itemData} = this.props;
		return (
			<div className="listItem scale-1px">
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
						<div className="item-count">xxx</div>
						<div className="item-distance">xxx</div>
						<div className="item-time">xxx</div>
					</div>
					<div className="item-price">
						<div className="item-pre-price">xxx</div>
					</div>
					<div className="item-others">
						<div className="other-info">
							<img src="" className="other-tag" alt=""/>
							<div className="other-content">dddddd</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ListItem
