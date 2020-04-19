import React from "react";
import { Route, Link } from "react-router-dom";

import Money from "./workspace/Money";
import GetUp from "./workspace/GetUp";

function workeSpace() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/workspace/money">加薪</Link>
          </li>
          <li>
            <Link to="/workspace/getUp">早期</Link>
          </li>
        </ul>
      </div>
      <div className="workeSpaceContent">
        <div>秘籍</div>
        <Route path="/workspace/money/" component={Money}></Route>
        <Route path="/workspace/getUp/" component={GetUp}></Route>
      </div>
    </div>
  );
}

export default workeSpace;
