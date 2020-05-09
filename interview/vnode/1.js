var html =
  '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>';
// 虚拟DOM 不是概念，而是在内存中
const ast = parse(); // ast vue/react template -> 抽象语法树(vue,babel) -> 虚拟DOM
