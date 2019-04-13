// import React from 'react';
import App from '../App';
// import Home from './Home';
// import fillIn1 from './ButtonBar';
import NotFound from '../../error/404';
import Loadable from 'react-loadable';
import Loading from "../Loading";

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});
const routes = [
  {
    path: '/',
    title: '首页',
    component: App,
    // component: (props) => {
    //   console.log(props)
    //   props.route.key = props.route.path;
    //   document.title = props.route.title;
    //   return <Home routes={props.route.routes} />;
    // },
    // render: (props) => {
    //   props.route.key = props.route.path;
    //   document.title = props.route.title;
    //   return <props.route.component />
    // },
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
        routes: [
        //  {
        //   path:'/m',
        //   component: fillIn1,
        //  }
        ]
      },
      {
        component: NotFound,
      }
      // {
      //   path: "/home",
      //   exact: true,
      //   component: fillIn1,
      // },
      
      // {
      //     path: "/translation",
      //     component: Translation,
      //     loadData: Translation.loadData,
      //     exact: true,
      //     key: 'translation'
      // },
      // {
      //   component: NotFound,
      // }
    ],
  },
  {
    component: NotFound,
  }
];
export default routes
