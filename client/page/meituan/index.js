import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import store from '../redux/store';

import routes from './route';


const Root = (
  <Provider store={store}>
    <HashRouter>
      {
        renderRoutes(routes)
      }
      {/* <BottomBar /> */}
    </HashRouter>
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));


if (module.hot) {
module.hot.accept(() => {
  ReactDOM.render(Root, document.getElementById('root'));
});
}

