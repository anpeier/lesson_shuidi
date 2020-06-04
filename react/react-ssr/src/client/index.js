import React from "react";
import ReactDOM from "react-dom";
import Header from "./../components/Header";

// SPA
// SSR 不需要render
// 调换：服务端已经完成，客户端不会重复做
// ReactDOM.render(<Header />,document.getElementById('root'))
ReactDOM.hydrate(<Header />, document.getElementById("root"));
