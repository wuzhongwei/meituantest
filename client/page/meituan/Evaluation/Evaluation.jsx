import React, { Component } from "react";
import NavHeader from '../../../components/NavHeader';

class Evaluation extends Component {
	constructor(){
		super();
		this.maxContent = 140;
		this.state = {
			count: this.maxContent,
			startIndex: 0,
		}
		
	}
	componentDidMount() {
		this.refs.commentInput.addEventListener('compositionstart', () => {
			this.chineseInputing = true;
		})
		this.refs.commentInput.addEventListener('compositionend', (e) => {
			this.chineseInputing = false;
			this.onInput(e.target.value)
		})
	}
	doEva(i) {
		this.setState({
			startIndex: i +1	
		})
	}

	renderStar() {
		let arr = [];
		for(let i=0;i<5;i++) {
			let cls = i >= this.state.startIndex ? "star-item" : "star-item light";
			arr.push(<div className={cls} key={i} onClick={() => {
				this.doEva(i)
			}}></div>);
		}
	  return arr;

	}
	onInput(val) {
		let num = val.length;
		if (!this.chineseInputing) {
			this.setState({
				count: this.maxContent - num
			})
		}
		
	}
	render() {
		const {count} = this.state;
		return (
			<div className="evaluation">
				<NavHeader title='评价'></NavHeader>
				<div className="eva-content">
					<div className="star-area">
						{
							this.renderStar()
						}
					</div>
					<div className="comment">
						<textarea ref="commentInput" onChange={(e) => {this.onInput(e.target.value)}} className="comment-input" placeholder="亲，菜品的口味如何，商家的服务是否周到?"  maxLength="140">
						</textarea>
						<span className="count">{count}</span>
					</div>
					<p className="one-line product-name">+厚切鸡排 香辣口水鸡饭. 中辣</p>
				</div>
				<div className="submit">提交评价</div>
			</div>
		);
	}
}

export default Evaluation
