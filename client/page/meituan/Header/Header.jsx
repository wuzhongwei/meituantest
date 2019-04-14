import React, { Component } from "react";
import SeachBar from '../SeachBar';

class Header extends Component {

	render() {

		return (
			<div className="header">
			<SeachBar></SeachBar>
				<img className="banner-img" src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" alt=""/>
			</div>
		);
	}
}

export default Header
