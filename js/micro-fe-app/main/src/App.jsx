import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Suspense
// 组件懒加载
const MicroApp1 = lazy(() => System.import("http://127.0.0.1:8080/Pay.js"))
function Pay() {
  // 引入远程的Pay资源
  return (
    <Suspense fallback="loading...">
      <MicroApp1 />
    </Suspense>
  )
  
}

// 主应用
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/pay">Pay</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/pay" component={Pay} />
        </Switch>
      </div>
    </Router>
  );
}
