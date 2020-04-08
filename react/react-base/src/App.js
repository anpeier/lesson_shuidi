import React, { useState } from "react";

class Header extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <header
        style={{
          color,
        }}
      >
        头
      </header>
    );
  }
}
// state
/**
 * <header style="color: red;">
        头
      </header>
 * data () {
 *  return {
 *    list: []
 *  }
 * }
 * import 
 * components: {
 * }
 * this.list.push()
 */
function App() {
  let book = "js book";
  let list = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
  ];
  // jsx v
  const [listState, setListState] = useState(list);
  let hasData = list.length > 0;
  // 列表渲染，jsx 会自动展开数组
  let arr = [<li>0</li>, <li>1</li>, <li>2</li>];
  const listEle = listState.map((person, i) => {
    // key 区分 我们前后两次的节点 可不可以复用（要不要销毁在重建）
    return (
      <li key={i}>
        姓名：{person.first}-{person.last}, 多久：{person.passed - person.year};
      </li>
    );
  });
  // console.log(list)
  // this.data.list.splice()
  setTimeout(() => {
    let newData = list.slice(0, list.length - 1);
    setListState(newData);
  }, 3000);
  return (
    <div>
      <Header color="red" />
      {book}
      {hasData ? listEle : <em>暂无数据</em>}
    </div>
  );
}

export default App;
