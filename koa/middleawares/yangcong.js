const Koa = require('koa');
const app = new Koa();

// post  file formidable 
const one = async (ctx, next) => {
  console.log('>> one');
  next(); //往后抛 []
  console.log('<< one');
}

const two = async (ctx, next) => {
  console.log('>> two');
  // ctx.body = 'hello, two'
  next(); //往后抛 []
  console.log('<< two');
}

const three = async (ctx, next) => {
  console.log('>> three');
  next(); //往后抛 []
  console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);

app.listen(3000);