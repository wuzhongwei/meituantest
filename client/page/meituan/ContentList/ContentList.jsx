import React, { Component } from "react";
import { connect } from 'react-redux';

import ListItem from '../ListItem';
import * as actions from '../../redux/actions/aperpolicy/aper';

class ContentList extends Component {

	componentDidMount(){
		this.props.getContentList();
		//this.props.getContentList();
	}

	renderItem(){
		const {items} = this.props;
		console.log(items)
		return items.map((item, index) => {
			return (
			<ListItem key={index} itemData={item}>
			</ListItem>
			)
		})
	}

	render() {

		return (
			<div className="list-content">
				<h4 className="list-title">
					<span className="title-line"></span>
					<span>附件商家</span>
					<span className="title-line"></span>
				</h4>
				{
					this.renderItem()
				}
			</div>
		);
	}
}

export default connect(state => ({...state.aperpolicy.contentList}), actions)(ContentList);
