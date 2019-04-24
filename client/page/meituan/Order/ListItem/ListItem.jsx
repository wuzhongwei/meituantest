import React, { Component } from "react";



class ListItem extends Component {

	renderProduct(data) {
		const list = data.product_list;
		list.push({type:'more'})
		return list.map((item,index) => {
			if (item.type) {
				return (
					<div className="product-item" key={index}>... 
						<div className="p-total-count">
							总计{data.product_count}个菜,实付
							<span className="total-price">¥{data.total}</span>
						</div>
					</div>
				)
			}
			return <div className="product-item" key={index}>{item.product_name}<div className="p-count">x{item.product_count}</div></div>
		})
	}
	renderComment(data) {
		let evaluation = !data.is_comment;
		if (evaluation) {
			return (
				<div className="evaluation">
					<div className="evaluation-btn">评价</div>
				</div>
			)
		}
		return  null;
	}

	render() {
		const {itemData} = this.props;
		
		return (
			<div className="order-itme">
				<div className="order-item-inner">
					<img className="itme-img" src={itemData.poi_pic} alt=""/>
					<div className="item-right">
						<div className="item-top">
							<p className="order-name one-line">{itemData.poi_name}</p>
							<div className="arrow"></div>
							<div className="order-state">{itemData.status_description}</div>
						</div>
						<div className="item-bottom">
							{
								this.renderProduct(itemData)
							}
						</div>
					</div>
				</div>
			{
				this.renderComment(itemData)
			}			
			</div>
		);
	}
}

export default ListItem;

