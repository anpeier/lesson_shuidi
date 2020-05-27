// 手写代码？源码
// vue 的闭包骚操作

// 判断一个字符串在传入的字符串中
// Vue 闭包
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  // console.log(map)
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => map[val.toLowerCase()] : (val) => map[val];
}
// div p html 自定义组件 还是html标签
// let isMyName = makeMap("前端王者,前端,刘子民,帅哥", true);
// console.log(isMyName('刘子民'))

const isHTMLTag = makeMap(
  "html,body,base,head,link,meta,style,title," +
    "address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section," +
    "div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul," +
    "a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby," +
    "s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video," +
    "embed,object,param,source,canvas,script,noscript,del,ins," +
    "caption,col,colgroup,table,thead,tbody,td,th,tr," +
    "button,datalist,fieldset,form,input,label,legend,meter,optgroup,option," +
    "output,progress,select,textarea," +
    "details,dialog,menu,menuitem,summary," +
    "content,element,shadow,template,blockquote,iframe,tfoot"
);

const isSVG = makeMap(
  "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face," +
    "foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern," +
    "polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
  true
);

function cached(fn) {
  const cache = Object.create(null);
  return function cachedFn(str) {
    const hit = cache["str"];
    return hit || (cache[str] = fn(str));
  };
}

// vue 缓存计算结果
const cacheDivCheck = cached(isHTMLTag);
let cacheStyle = cacheDivCheck("div");
console.log(cacheStyle)