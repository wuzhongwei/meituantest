import React, { Component } from "react";
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import * as actions from '../../redux/actions/aperpolicy/aper';
import NavHeader from '../../../components/NavHeader';

class Details extends Component {
	renderTabs() {
		const tabs = this.props.tabs;
		return tabs.map((item) => {
			return (
				<NavLink 
					activeClassName="active" 
					className="tab-item" 
					to={'/details/' + item.key} 
					key={item.key}>
					{
						item.name
					}
				</NavLink>
			)
		})
		// console.log('tabs', tabs)
	}
	render() {
		const poiName = this.props.poiInfo.name;
		
		return (
			<div className="details">
				<NavHeader title={poiName} />
				<div className="tab-bar">
					{this.renderTabs()}
				</div>
				{
					renderRoutes(this.props.route.routes)
				}
				{
					this.props.showContent ? <div className="mask"></div> : null
				}
				
				
			</div>
		);
	}
}

export default connect(state => ({...state.aperpolicy.details,...state.aperpolicy.menu}), actions)(Details);

