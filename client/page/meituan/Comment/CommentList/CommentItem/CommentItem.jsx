import React, { Component } from "react";

class CommentItem extends Component {
	renderImgs(item) {
		let imgs = item.comment_pics || [];
		if (imgs.length) {
			return (
				<div className="img-content">
					{imgs.map((res, index) => {
						let src = res.url;
						let style = {
							backgroundImage: `url(${src})`
						}
						return <div key={index} className="img-item" style={style}></div>
					})}
				</div>
			)
		}
		return null;
	}
	renderTags(arr) {
		return arr.map((item) => {
			return item.content + '.';
		});
	}
	formatTime(time) {
		let date = new Date(Number(time + '000'));
		console.log(date.getFullYear())
		return date.getFullYear() +'.' + (date.getMonth() +1) + '.' +date.getDate();
	}
	render() {
		let item = this.props.data;

		return (
			<div className="comment-item">
				<div className="comment-time">{this.formatTime(item.comment_time)}</div>
				<img className="avatar" src={item.user_pic_url || 'https://img.meituan.net/avatar/1d7fe969523414ec3235b6828763706d30899.jpg'} alt=""/>
				<div className="item-right">
					<p className="nickname">{item.user_name}</p>
					<div className="star-and-time">
						<div className="star-content">*****</div>
						<div className="send-tiem">{item.ship_time + '分钟送达'}</div>
					</div>
					<div className="comment-text">
						{
							item.comment
						}
					</div>
					{
						this.renderImgs(item)
					}
					{
						item.praise_food_tip ? <div className="like-info">{item.praise_food_tip }</div> : null
					}
					{
						item.comment_labels.length ? <div className="tag-info">{this.renderTags(item.comment_labels) }</div> : null
					}
				</div>
			</div>
		);
	}
}

export default CommentItem
