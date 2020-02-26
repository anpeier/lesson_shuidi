// // 手动的计算
console.log('rem');
(function(doc, win){
  // 不会勿滥外界 
  // html fontSize  width/16 栅格 
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win ? 'orientationchange': 'resize',
    recalc = function() {
      // 设备无差异计算出  16rem = 100% width
      var clientWidth = docEl.clientWidth;

      if (!clientWidth) return;
      // 设计稿  750  375  640  320
      docEl.style.fontSize = 20 * clientWidth/375 + 'px';
      // console.log(clientWidth);
      // ?设备可能由纵向变模着拿 手机发生变化
      win.addEventListener(resizeEvt, recalc, false);
    };
  // 从外到内， 从内到外
  // .box   click  a()    true  由外向内执行;
  //   .innerBOX  b()    false   内层向外层执行;
  doc.addEventListener('DOMContentLoaded', recalc, false);
  // docEl.style.fontSize = '23.5px';
})(document, window) // 闭包， 立即执行 实参
