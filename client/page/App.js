import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';

import BottomBar from './meituan/BottomBar';
import '../styles/index.scss';

function App(props) {
  return <Fragment>
    {
      renderRoutes(props.route.routes)
    }
    <BottomBar></BottomBar>
  </Fragment>;
}
export default App
