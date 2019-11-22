var Animation = function(opts){
    //els 参数
    var dur = 0.3,
        amount = '55%',
        tl = new TimelineMax({
            repeat:-1,
            yoyo:true,
            repeatDelay:1
        });
        tl
          .add(
              fromLeft(
                  opts.leftAnimated
                )         
            )
          .add(
              fromRight(
                  opts.rightAnimated
                  )
          )

        function fromLeft(el){
            return TweenMax.from(el,dur,{x:"-=" + amount,autoAlpha:0.2})
        }
        function fromRight(el){
            return TweenMax.from(el,dur,{x:"+=" + amount,autoAlpha:0.2})
        }
}
// 流程式的，不适合复用

// //线性运动库
// var tl = new TimelineMax({
//     repeat:-1,
//     yoyo:true,
//     repeatDelay:1
// })
// tl.from(['#box_1,#box_2'],0.3,{x:'-=55%'});
// tl.from(['#box_3'],0.3,{x:'+=55%'});