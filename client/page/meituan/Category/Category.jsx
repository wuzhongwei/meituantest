import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/aperpolicy/aper';

class Category extends Component {

	componentDidMount(){
		this.props.getCategory();
	}

	renderItem(){
		const {items} = this.props;
		return items.map((item, index) => {
			return (<div 
				key={index} 
				className="category-item">
				<img className="item-icon" src={item.url} />
				<div className="item-name">{item.name}</div>
			</div>)
		})
	}



	render() {
		
		return (
			<div className="category">
				{
					this.renderItem()
				}
			</div>
		);
	}
}

export default connect(state => ({...state.aperpolicy.category}), actions)(Category);