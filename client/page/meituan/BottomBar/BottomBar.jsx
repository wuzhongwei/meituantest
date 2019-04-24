import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import classnames from 'classnames';
import Icon from '../../../components/Icon';
import * as actions from '../../redux/actions/aperpolicy/aper';

class BottomBar extends Component {
	renderItem() {
		const { tabs, activeKey, changeTab } = this.props;
	
		return tabs.map((item, index) => {
			return (
				<NavLink
					activeClassName="active"
					className="btn-item"
					exact
					key={index}
					to={'/'+item.key}
					// onClick={() => {
					// 	changeTab(item.key);
					// }}
				>
					<div className="tab-icon">
						<Icon type={item.key} />
					</div>
					<div className="btn-name">{item.name}</div>
				</NavLink>
			)
		})
	}
	render() {
		return (
			<div className="bottom-bar">
				{
					this.renderItem()
				}
			</div>
		);
	}
}

export default connect(state => ({...state.aperpolicy.fillIn}), actions)(BottomBar);