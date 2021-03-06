import React, { useRef, useState, useEffect } from "react";

function Example8() {
  // useRef 返回一个可变的ref对象 并且该对象在整个生命周期内保持不变。
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.value = "hello";
    console.log(inputEl);
  };

  const [text, setText] = useState("lap");
  const textRef = useRef();

  useEffect(() => {
    // 保存可变值
    textRef.current = text;
    console.log("textCur:" + textRef.current);
  });

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>展示</button>
      <br />
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
}

export default Example8;
