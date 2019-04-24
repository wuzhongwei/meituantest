import React, { Component } from 'react';
import Icon from '../Icon';


class NavHeader extends Component {
  render () {

    return (
      <div className="navHeader">
        <div className="back-icon">
          <Icon type="back" />
        </div>
        <h4 className="title">{this.props.title}</h4>
      </div>
    );
  }
}

export default NavHeader;
