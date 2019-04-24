import React, { Component } from "react";
import Icon from '../../../components/Icon';


class My extends Component {

	render() {

		return (
			<div className="my">
				<div className="header">
					<img className="avatar" src="//i.waimai.meituan.com/static/img/default-avatar.png" alt=""/>
					<p className="nickname">xiaom &gt;</p>
				</div>
				<div className="content">
					<ul className="items">
						<li className="address"><Icon type="address" />收获地址管理</li>
						<li className="money"><Icon type="money" />商家代金券</li>
					</ul>
					<ul className="items">
						<li className="emial"><Icon type="emial" />意见反馈</li>
						<li className="question"><Icon type="question" />常见问题</li>
					</ul>
					<p className="tel">客服电话:&nbsp;101-097-77</p>
					<p className="time">服务时间:&nbsp;9:00-23:00</p>
				</div>
			</div>
		);
	}
}

export default My
