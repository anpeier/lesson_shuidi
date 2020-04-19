import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Video from "./pages/Video";
import WorkeSpace from "./pages/WorkeSpace";
import "./index.css";

function AppRouter() {
  let routerConifg = [
    { path: "/", title: "博客首页", exact: true, component: Index },
    { path: "/video", title: "视频", exact: false, component: Video },
    { path: "/workspace", title: "技能", exact: false, component: WorkeSpace },
  ];
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            {routerConifg.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rightMain">
          {routerConifg.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                component={item.component}
              ></Route>
            );
          })}
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
