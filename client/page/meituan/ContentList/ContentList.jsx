import React, { Component } from "react";
import { connect } from 'react-redux';

import ListItem from '../../../components/ListItem';
import ScrollView from '../../../components/ScrollView';
import * as actions from '../../redux/actions/aperpolicy/aper';

class ContentList extends Component {
	constructor(props){
		super();
		this.state = {
			isend: false
		}
		this.page = 0;
		this.onLoadPage = this.onLoadPage.bind(this);
		props.getContentList(this.page);
	}

	onLoadPage() {
		this.page = this.page + 1;

				if (this.page > 3) {
					this.setState({
						isend: true
					})
				} else {
					this.props.getContentList(this.page);
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
				<h4 className="list-title">
					<span className="title-line"></span>
					<span>附件商家</span>
					<span className="title-line"></span>
				</h4>
				<ScrollView loadCallback={this.onLoadPage} isend={this.state.isend}> 
				{
					this.renderItem()
				}
				</ScrollView>
				

				
			</div>
		);
	}
}

export default connect(state => ({...state.aperpolicy.contentList}), actions)(ContentList);
