import React from "react";

import Header from '../Header';
import Category from '../Category';
import ContentList from '../ContentList';

function Home(props) {

	return (
		<div className="home">
			<Header></Header>
			<Category></Category>
			<ContentList />

		</div>
	);

}

export default Home
