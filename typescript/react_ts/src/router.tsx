// vue 全家桶   react  router
import * as React from "react"; // 组件
import { Route, HashRouter, Switch } from "react-router-dom";
// vue-router 对比学习 react-router
import { About, MembersPage } from "./components/index";
import { App } from "./app";
export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    // new VueRouter()
    <HashRouter>
      {/* routes 数组 */}
      <Route path="/" component={App} />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/member" component={MembersPage} />
      </Switch>
    </HashRouter>
  );
};

// new vue({
//   el: '',
//   router,
//   App
// })
