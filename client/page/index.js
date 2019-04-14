import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));

import React from 'react';
import fillIn from './fillIn';
import fillIn1 from './fillIn1';
import cccc from './fillIn2';
export const routes = [
  {
    path: "/fillIn",
    component: fillIn
  },
  {
    path: "/fillIn1",
    component: fillIn1,
    routes: [
      {
        path: "/fillIn2",
        component: cccc
      }
    ]
  }
];

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import * as actions from './redux/actions/aperpolicy/aper';

class App extends Component {
  componentDidMount(){

    this.props.getData();
  }

  render() {
    return (
      <div className="App">
        
          
          <br />
          <Route path="/" exact render={() => {
            return 'home'
          }}></Route>
          <Route path="/list" render={() => {
            return 'list'
          }}></Route>
           <Route path="/pre" render={() => {
            return 'pre'
          }}></Route>

          <br />
          <Link to="/">home</Link>
          <Link to="/list">list</Link>
          <Link to="/pre">pre</Link>

       
      </div>
    );
  }
}

export default connect(state => ({...state.aperpolicy}), actions)(App);

