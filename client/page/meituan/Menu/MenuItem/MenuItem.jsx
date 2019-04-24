import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/aperpolicy/aper';

class MenuItem extends Component {
	

	render() {
		const {data} = this.props;
		return (
			<div className="menu-item">
				<img className="img" src={data.picture} alt=""/>
				<div className="menu-item-right">
					<p className="item-title">{data.name}</p>
					<p className="item-desc two-line">{data.description}</p>
					<p className="item-zan">{data.praise_content}</p>
					<p className="item-price ">¥{data.min_price}/ <span className="unit">{data.unit}</span></p>
				</div>
				<div className="select-content">
					{
						data.chooseCount > 0 ? <div className="minus" onClick={() => {
							this.props.minusSelectItem({index: this.props._index})
						}}></div> : null
					}
					{
						data.chooseCount > 0 ? <div className="count">{data.chooseCount}</div> : null
					}
					<div className="plus" onClick={() => {
						this.props.addSelectItem({index: this.props._index})
					}}></div>
				</div>
			</div>
		);
	}
}

export default connect(state => ({...state.aperpolicy.menu}), actions)(MenuItem);

