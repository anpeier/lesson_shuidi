// interface 接口
// getUserInfo3的开发者
// 类型是基础类型，在多个地方会使用的时候
// user 实现了IUser 一样的属性和方法的对象 通过接口来约束
interface IUser {
  name: string;
  age: number;
}
const getUserInfo3 = (user: IUser): string => {
  //   if (true) {
  //     return 123;
  //   }
  return `name:${user.name},age:${user.age}`;
};

getUserInfo3({ name: "lap", age: 18 });
