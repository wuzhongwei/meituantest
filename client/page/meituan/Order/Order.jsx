import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/aperpolicy/aper';
import ScrollView from '../../../components/ScrollView';
import ListItem from './ListItem';

class Order extends Component {
	constructor(props) {
		super();
		this.page = 0;
		this.state = {
			isend: false
		}
		props.getOrder(this.page);
		this.loadPage = this.loadPage.bind(this);
	}
	loadPage() {
		this.page++;
	
		if (this.page > 3) {
			this.setState({
				isend: true
			});
		} else {
			this.props.getOrder(this.page);
		}
	}

	renderList() {
		const {items} = this.props;
		return items.map((item, index) => {
			return <ListItem itemData={item} key={index}>
				{item.poi_name}
			</ListItem>
		})
	}
	render() {
		console.log(this.props)
		return (
			<div className="order">
				<div className="header">订单</div>
				<ScrollView loadCallback={this.loadPage} isend={this.state.isend}>
				<div className="order-list">{this.renderList()}</div>
				</ScrollView>
			</div>
		);
	}
}

export default connect(state => ({...state.aperpolicy.order}), actions)(Order);

