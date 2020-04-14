function a() {
  console.log(this.name);
}
var name = 1;
a();

// function b() {
//   this.value = this.name;
// }
// b();

// async function test() {
//   return 1
// }
// async function call() {
//   const a = test();
//   const b = await test();
//   console.log(a, b);
// }
// call();

