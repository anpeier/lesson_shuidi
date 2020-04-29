// 配置？ 
import React from 'react';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

import { Redirect } from 'react-router-dom';
export default [{
  path: "/",
  component: Home,
  routes: [
    {
      path: "/",
      exact: true,
      render: () => (
        <Redirect to={"/recommend"}/>
      )
    },
    {
      path: "/recommend",
      component: Recommend
    },
    {
      path: "/singers",
      component: Singers
    },
    {
      path: "/rank",
      component: Rank
    }
  ]
}]