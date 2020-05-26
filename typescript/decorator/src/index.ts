const userInfo: any = undefined;
function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (error) {
        console.log(msg);
      }
    };
  };
}

class Test {
  @catchError("name error")
  getName() {
    return userInfo.name;
  }
  @catchError("age error")
  getAge() {
    return userInfo.age;
  }
}

const test = new Test();
test.getName();
test.getAge();
