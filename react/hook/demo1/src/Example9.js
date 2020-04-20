import React, { useState, useEffect, useCallback } from "react";

// 自定义hook函数 use开头
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  //   useCallback 返回一个 memoized(带缓存) 回调函数。
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);

  // 类似于声明周期 第二个参数改变时触发
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
  return size;
}


function Example9() {
    const size = useWinSize()

    return (
        <div>
            页面Size:{size.width}X{size.height}
        </div>
    )
}

export default Example9