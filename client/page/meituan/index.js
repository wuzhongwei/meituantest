import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import store from '../redux/store';

import routes from './route';


const Root = (
  <Provider store={store}>
    <BrowserRouter>
      {
        renderRoutes(routes)
      }
      {/* <BottomBar /> */}
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));


if (module.hot) {
module.hot.accept(() => {
  ReactDOM.render(Root, document.getElementById('root'));
});
}

