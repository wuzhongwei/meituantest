import React from "react";
import BottomBar from '../BottomBar';
import Header from '../Header';
import Category from '../Category';
import ContentList from '../ContentList';
// import { renderRoutes, matchRoutes  } from 'react-router-config';

function Home(props) {

	return (
		<div className="home">
			<Header></Header>
			<Category></Category>
			<ContentList />
			<BottomBar></BottomBar>
		</div>
	);

}

export default Home
