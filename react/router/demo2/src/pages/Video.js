import React from "react";
import { Route, Link } from "react-router-dom";

import ReactPage from "./video/ReactPage";
import VuePage from "./video/VuePage";
import FlutterPage from "./video/ReactPage";

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/video/react">React</Link>
          </li>
          <li>
            <Link to="/video/vue">Vue</Link>
          </li>
          <li>
            <Link to="/video/flutter">Flutter</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>框架</div>
        <Route path="/video/react/" component={ReactPage}></Route>
        <Route path="/video/vue/" component={VuePage}></Route>
        <Route path="/video/flutter/" component={FlutterPage}></Route>
      </div>
    </div>
  );
}

export default Video;
