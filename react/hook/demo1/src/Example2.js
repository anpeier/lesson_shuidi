import React, { useState } from "react";

function Example2() {
  // useState 不能在条件语句中
  const [age, setAge] = useState(18);
  const [sex, setSex] = useState("男");
  return (
    <div>
      <p>lap今年：{age}岁</p>
      <p>性别：{sex}</p>
      <button></button>
    </div>
  );
}

export default Example2;
