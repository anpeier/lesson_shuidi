// 泛型
function echo<T>(arg: T): T {
  return arg;
}
const str: string = "123";
const result = echo(str);

function swap<T, U>(tuple: [T, U]): [T, U] {
  return [tuple[0], tuple[1]];
}
const result2 = swap(["string", 111]);

// 约束泛型
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
const arrs = echoWithArr([1, 2, 3]);

interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
const arrs2 = echoWithLength("str");
const arrs3 = echoWithLength([1, 2, 3]);
const arrs4 = echoWithLength({ length: 10, width: 10 });
// echoWithLength(123) // 无length 报错

// 泛型类
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}
const queue = new Queue<number>();
queue.push(1.11);
queue.push(12.3);
console.log(queue.pop().toFixed());

const queue2 = new Queue<string>();
queue2.push("str");
console.log(queue2.pop().length);

// 接口泛型
interface KeyPair<T, U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = { key: 123, value: "str" };
let kp2: KeyPair<string, number> = { key: "123", value: 1 };
let arr: number[] = [1, 2, 3];
let arrTwo: Array<number> = [1, 2, 3];

// 函数泛型
interface IPlus<T> {
  (a: T, b: T): T;
}
function plus(a: number, b: number): number {
  return a + b;
}
function connect(a: string, b: string): string {
  return a + b;
}
const a: IPlus<number> = plus;
const b: IPlus<string> = connect;
