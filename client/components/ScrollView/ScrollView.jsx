import React, { Component } from 'react';
import LoadIng from '../LoadIng';

class ScrollView extends Component {
  constructor() {
    super();
    this.onLoadPage = this.onLoadPage.bind(this);
  }
  componentDidMount() {
		window.addEventListener('scroll', this.onLoadPage);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.onLoadPage);
	}

	onLoadPage() {
		const scrollTop = document.documentElement.scrollTop;
		const bodyHeight = document.body.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;
		const spe = 90;
		
		if ((scrollTop + clientHeight) >= (bodyHeight-spe)) {
      if (!this.props.isend) {
        this.props.loadCallback && this.props.loadCallback();
      }
		}
	}
  render () {
   
    return <div className="scrollView">
      {
        this.props.children
      }
      <LoadIng isend={this.props.isend} />
    </div>;
  }
}

export default ScrollView;
