import React, { useState } from "react";
import dynamic from "next/dynamic"; // 懒加载

// const xxx = dynamic(import('path'))

function Time() {
  const [nowTime, setTime] = useState(Date.now);
  const changeTime = async () => {
    const moment = await import("moment");
    setTime(moment.default(Date.now()).format());
  };

  return (
    <>
      <div>显示时间为：{nowTime}</div>
      <div>
        <button onClick={changeTime}>改变时间</button>
      </div>
    </>
  );
}

export default Time;
