import React, { Component } from "react";
import NavHeader from '../../../components/NavHeader';
import Header from './Header';
import Contentlist from './ContentList';

class Sort extends Component {

	render() {

		return (
			<div className="sort-category">
				<NavHeader title="分类" />
				<Header></Header>
				<Contentlist></Contentlist>
			</div>
		);
	}
}

export default Sort
