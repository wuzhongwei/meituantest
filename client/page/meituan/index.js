import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import {BrowserRouter} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './route';


const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
      {
        renderRoutes(routes)
      }
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
