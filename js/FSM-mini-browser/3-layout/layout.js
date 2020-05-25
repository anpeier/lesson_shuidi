// css 格式化：css 不同值，标准化为一个值
// font-weight: bold;
// bold => 800
// background-color: #fff;
// #fff => rgba()
function getStyle(element) {
  if (!element.style) {
    element.style = {};
  } else {
    return element.style;
  }
  for (let prop in element.computerStyle) {
    // let p =
    element.style[prop] = element.computerStyle[prop].value;
    if (
      element.style[prop].toString().match(/px$/) ||
      element.style[prop].toString().match(/^[0-9\.]+$/)
    ) {
      element.style[prop] = parseInt(element.style[prop]);
    }
    if (prop.includes("-")) {
      let props = prop.split("-");
      let formatProp =
        props[0] + props[1].charAt(0).toUpperCase() + props[1].substring(1);
      element.style[formatProp] = element.computerStyle[prop].value;
    }
  }
  return element.style;
}
function layout(element) {
  if (!element.computerStyle) return;
  let elementStyle = getStyle(element);
  if (elementStyle.display !== "flex") return;
  // 主轴 尺寸
  // 起点 left top
  // 绘制的坐标起点
  // let mainSize, mainStart, mainBase
  // let width
  // if (elementStyle.flexDirection === 'row') {
  //   width = elementStyle['width']
  // }
  // if (elementStyle.flexDirection === 'column') {
  //   width = elementStyle['height']
  // }
  // width = elementStyle[mainSize]
  // 主轴剩余空间
  let mainSpace = elementStyle.width;
  let maxHeight = 0;
  let items = element.children.filter((e) => e.type === "element");
  for (let item of items) {
    let itemStyle = getStyle(item);
    mainSpace -= itemStyle.width;
    maxHeight = Math.max(maxHeight, itemStyle.height);
  }
  // 主轴绘制的起点 left
  let mainBase = 0;
  console.log(mainSpace);
  if (elementStyle.justifyContent === "center") {
    mainBase = mainSpace / 2;
    for (let item of items) {
      let itemStyle = getStyle(item);
      // 不是 position left
      // 距离左边距离
      itemStyle.left = mainBase;
      mainBase += itemStyle.width;
    }
  }
  // top
  let crossBase = (elementStyle.height - maxHeight) / 2;
  if (elementStyle.alignItems === "center") {
    for (let item of items) {
      let itemStyle = getStyle(item);
      let diff = (maxHeight - itemStyle.height) / 2;
      itemStyle.top = crossBase + diff;
    }
  }
}

module.exports = layout;
