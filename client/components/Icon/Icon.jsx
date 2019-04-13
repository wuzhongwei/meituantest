import React, { Component } from 'react';
import classnames from 'classnames';

const fontTypesMapping = {
  home: '\ue603',
  order: '\ue719',
  my: '\ue62a',
  area: '\ue65b',
  fangda: '\ue62d',
};

class Icon extends Component {

  render () {
    const { type, font, theme, className, ...others } = this.props;
    const cls = classnames({
      'iconfont': true,
      [ className ]: !!className
    });

    return (
      <i className={ cls } data-font={ fontTypesMapping[type] || font } { ...others } />
    );
  }

}

export default Icon;
