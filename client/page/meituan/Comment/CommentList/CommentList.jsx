import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actions from '../../../redux/actions/aperpolicy/aper';

import ScrollView from '../../../../components/ScrollView';
import CommentItem from './CommentItem';

class CommentList extends Component {
	constructor() {
		super();
		this.page = 0;
		this.onLoadPage = this.onLoadPage.bind(this);
	}
	renderList() {
			let list = this.props.commentList;
			return list.map((item, index) => {
				return <CommentItem key={index} data={item}></CommentItem>
			})
		
	}
	onLoadPage() {


		this.props.getComment();

	}
	render() {
	
		return (
			<div className="commentList">
				<ScrollView loadCallback={this.onLoadPage} isend={0}>
					{this.renderList()}
				</ScrollView>
			
			</div>
		);
	}
}


export default connect(state => ({...state.aperpolicy.comment}), actions)(CommentList);