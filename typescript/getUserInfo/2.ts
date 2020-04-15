let getUserInfo2 = function (user: { name: string; age: number }) {
  // 参数随意
  return `name:${user.name},age:${user.age}`;
};

// 中间过程意料不到的可能，数据从数据库取得
console.log(getUserInfo2({ name: "sss", age: 18 }));
