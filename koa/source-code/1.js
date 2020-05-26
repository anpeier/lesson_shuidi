let o1 = { a: "hello" };
let o2 = Object.create(o1);

o2.b = "world";

console.log("o1:", o1.b); // undefined
console.log("o2:", o2.a); // hello
console.log(o2.__proto__ === o1);

const Koa = require("koa"); // class Koa EventEmitter
const app = new Koa();

app.use((ctx, next) => { // fn ctx next
  // fn
  ctx.body = "hello koa"; // res.end()
});

app.listen("3000"); // createServer callback
