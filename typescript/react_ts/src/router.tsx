// vue 全家桶   react  router
import * as React from "react"; // 组件
import { Route, HashRouter, Switch } from "react-router-dom";
// vue-router 对比学习 react-router
import { hello } from "./hello";
import { App } from "./app";
export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    // new VueRouter()
    <HashRouter>
      <Switch>
        {/* routes 数组 */}
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={hello} />
      </Switch>
    </HashRouter>
  );
};

// new vue({
//   el: '',
//   router,
//   App
// })
