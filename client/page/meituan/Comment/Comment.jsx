import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/aperpolicy/aper';
import CommentList from './CommentList';
class Comment extends Component {
	constructor(props) {
		super();
		props.getComment();
	}
	

	render() {
		let data = this.props.commentData;
		return (
			<div className="comment-inner">
				<div className="comment-score">
					<div className="mail-score-content">
						<div className="mail-score">{data.comment_score}</div>
						<div className="mail-text">商家评价</div>
					</div>
					<div className="other-score-content">
						<div className="taste-score">
							<div className="taste-text">口味</div>
							<div className="taste-star-wrap">*****</div>
							<div className="taste-score-text">{data.food_score}</div>
						</div>
						<div className="package-score">
							<div className="package-text">包装</div>
							<div className="package-star-wrap">*****</div>
							<div className="package-score-text">{data.pack_score}</div>
						</div>
					</div>
					<div className="send-score-content">
						<div className="send-score">{data.delivery_score}</div>
						<div className="send-text">商家评价</div>
					</div>

				</div>
				<CommentList></CommentList>
			</div>
		);
	}
}

export default connect(state => ({...state.aperpolicy.comment}), actions)(Comment);


