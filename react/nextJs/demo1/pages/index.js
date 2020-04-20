import Nav from "../components/Nav";
import Lap from "../components/Lap";
import Link from "next/link";
import Router from "next/router";
const IndexPage = () => {
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
    </>
  );
};

export default IndexPage;
