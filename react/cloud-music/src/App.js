import React from 'react';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js'
function App() {
  return (
    <HashRouter>
      <div className="App">
        <GlobalStyle />
        <IconStyle/>
        { renderRoutes(routes)}
        {/* <i className="iconfont">&#xe62b;</i> */}
      </div>
    </HashRouter>
  );
}

export default App;
