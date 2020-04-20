import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from './edit'

export const App = () => {
  // react hook react新的函数 改变组件的编写方式和redux的新方式
  const [name, setName] = React.useState("安培儿");
  const setuserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <>
      <HelloComponent username={name} />
      <NameEditComponent username={name} onChange={setuserName} />
    </>
  );
};
