import Nav from "../components/Nav";
import Lap from "../components/Lap";
import Link from "next/link";
import Router from "next/router";
const IndexPage = () => {
  // Lazy Loading

  // function goToL() {
  //   Router.push("/lap");
  // }
  // return (
  //   <>
  //     <Nav />
  //     <Lap>anpeier</Lap>
  //     <p>Hello, I'm the index page</p>
  //     <div>首页</div>
  //     {/* 标签式跳转 */}
  //     <Link href="/lap">
  //       <div>安培儿界面</div>
  //     </Link>
  //     <button onClick={goToL}>安培儿页面</button>
  //   </>
  // );
  Router.events.on("routeChangeStart", (...args) => {
    console.log("1.routeChangeStart-> 路由开始变化，参数为：", ...args);
  });

  Router.events.on("routeChangeComplete", (...args) => {
    console.log("2.routeChangeComplete-> 路由变化结束，参数为：", ...args);
  });

  Router.events.on("beforeHistoryChange", (...args) => {
    console.log("3.beforeHistoryChange-> 路由开始变化，参数为：", ...args);
  });

  Router.events.on("hashChangeStart", (...args) => {
    console.log("1.hashChangeStart-> 路由开始变化，参数为：", ...args);
  });

  Router.events.on("hashChangeComplete", (...args) => {
    console.log("2.hashChangeComplete-> 路由变化结束，参数为：", ...args);
  });

  function toXiaojiejie() {
    Router.push({
      pathname: "/xiaojiejie",
      query: {
        name: "井空",
      },
    });
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href={{ pathname: "xiaojiejie", query: { name: "结衣" } }}>
          <a>选择结衣</a>
        </Link>
      </div>
      <div>
        <Link href="/xiaojiejie?name=井空">
          <a>选择井空</a>
        </Link>
      </div>
      <button onClick={toXiaojiejie}>选择井空</button>
      <div>
        <Link href="#/jjj">
          <a>不搞鸡</a>
        </Link>
      </div>
    </>
  );
};

export default IndexPage;
