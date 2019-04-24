import React, { Component } from "react";
import { connect } from 'react-redux';

import ListItem from '../../../../components/ListItem';
import ScrollView from '../../../../components/ScrollView';
import * as actions from '../../../redux/actions/aperpolicy/aper';

class ContentList extends Component {
	constructor(props){
		super();

		this.onLoadPage = this.onLoadPage.bind(this);
		props.getSortContentlist({});
	}

	onLoadPage() {
		if (this.props.page <= 3) {
			this.props.getSortContentlist({});
		} 
	}
	renderItem(){
		const {items} = this.props;
	
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
				<ScrollView loadCallback={this.onLoadPage} isend={this.props.isend}> 
				{
					this.renderItem()
				}
				</ScrollView>
			</div>
		);
	}
}

export default connect(state => ({...state.aperpolicy.sortContentList}), actions)(ContentList);
