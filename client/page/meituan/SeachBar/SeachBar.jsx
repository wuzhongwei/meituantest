import React, { Component } from "react";
import Icon from '../../../components/Icon';

class SeachBar extends Component {

	render() {

		return (
			<div className="seachBar">
				<div className="seachBar-l">
					<div className="seachBar-icon">
						<Icon className="area" type="area" />
					</div>
					<div className="seachBar-text">郑州市</div>
				</div>
				<div className="seachBar-r">
					<p className="seachBar-holder"><Icon className="fangda" type="fangda" />鸡翅</p>
				</div>
			</div>
		);
	}
}

export default SeachBar
