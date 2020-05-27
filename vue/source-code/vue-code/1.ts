function tsMakeMap(
  str: string,
  expectsLowerCase?: boolean
): (key: string) => void | true {
  const map = Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => map[val.toLowerCase()] : (val) => map[val];
}
let tsIsMyName = tsMakeMap("前端王者,前端,刘子民,帅哥", true);
console.log(tsIsMyName("刘子民"));