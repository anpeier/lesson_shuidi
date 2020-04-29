import React from 'react';
import {} from './style.js';
import { renderRoutes } from 'react-router-config';
import { Top } from './style';
function Home(props){
  // / =>  HOME
  // console.log(props)  react props如果在router 之中，
  // 那么他会包含history, location route(当前route.routes)
  const { route } = props;
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">Web App</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      { renderRoutes(route.routes) }
    </div>
  );
}
 
export default React.memo(Home);