import { useState } from "react";

function Lap() {
  const [color, setColor] = useState("blue");
  const changeColor = () => {
    setColor(color === "blue" ? "red" : "blue");
  };
  return (
    <>
      <button onClick={changeColor}>lap</button>
      <style jsx>
        {`
          button {
            color: ${color};
          }
        `}
      </style>
    </>
  );
}

export default Lap;
