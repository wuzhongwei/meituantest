// import React from 'react';
import Loadable from 'react-loadable';
import App from '../App';
import NotFound from '../../error/404';
import Loading from "../Loading";

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});
const Order = Loadable({
  loader: () => import('./Order'),
  loading: Loading
});
const My = Loadable({
  loader: () => import('./My'),
  loading: Loading
});
const Sort = Loadable({
  loader: () => import('./Sort'),
  loading: Loading
});
const Evaluation = Loadable({
  loader: () => import('./Evaluation'),
  loading: Loading
});
const Detaills = Loadable({
  loader: () => import('./Details'),
  loading: Loading
});
const Menu = Loadable({
  loader: () => import('./Menu'),
  loading: Loading
});
const Comment = Loadable({
  loader: () => import('./Comment'),
  loading: Loading
});
const Restanurant = Loadable({
  loader: () => import('./Restanurant'),
  loading: Loading
});
// const ShopBar = Loadable({
//   loader: () => import('./ShopBar'),
//   loading: Loading
// });
const routes = [
  {
    path: "/evaluation",
    component: Evaluation
  },
  {
    component: Detaills,
    path: "/details",
    routes: [
      {
        path: "/details/menu",
        exact: true,
        component: Menu
      },
      {
        path: "/details/comment",
        component: Comment
      },
      {
        path: "/details/restanurant",
        component: Restanurant
      }
    ],
  },
  {
    // path: '/',
    // exact: true,
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
        component: Home
      },
      {
        path: "/order",
        component: Order
      },
      {
        path: "/my",
        component: My
      },
      {
        path: "/sort",
        component: Sort
      },
      {
        component: NotFound,
      }
    ],
  },
  {
    component: NotFound,
  },
];
export default routes
