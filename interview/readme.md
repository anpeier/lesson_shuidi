- 输入 URL 到渲染页面的每一步
  1. 首先，在浏览器地址栏中输入 url
  2. 浏览器先查看浏览器缓存-系统缓存-路由器缓存，如果缓存中有，会直接在屏幕中显示页面内容。若没有，则跳到第三步操作。
  3. 在发送 http 请求前，需要域名解析(DNS 解析)(DNS（域名系统，Domain Name System）是互联网的一项核心服务，它作为可以将域名和 IP 地址相互映射的一个分布式数据库，能够使人更方便的访问互联网，而不用去记住 IP 地址。)，解析获取相应的 IP 地址。
  4. 浏览器向服务器发起 tcp 连接，与浏览器建立 tcp 三次握手。（TCP 即传输控制协议。TCP连接是互联网连接协议集的一种。）
  5. 握手成功后，浏览器向服务器发送 http 请求，请求数据包 POST请求的话，发送完请求头之后，还会发送请求体。
  6. 服务器处理收到的请求，将数据返回至浏览器
  7. 浏览器收到 HTTP 响应
  8. 读取页面内容，浏览器渲染，解析 html 源码
  9. 生成 Dom 树、解析 css 样式、js 交互
  10. 客户端和服务器交互
  11. ajax 查询
- vueSSR渲染原理
    - 优点：利于搜索引擎，解决白屏问题，因为正常情况下在index.html文件中只有一个简单的标签，没有内容，不利于爬虫搜索
    - 场景：交互少，数据多，例如新闻，博客，论坛类等
    - 原理：相当于服务端前面加了一层url分配，可以假想为服务端的中间层，
    当地址栏url改变或者直接刷新，其实直接从服务器返回内容，是一个包含内容部分的html模板，是服务端渲染
    而在交互过程中则是ajax处理操作，局部刷新，首先是在history模式下，通过history. pushState方式进而url改变，然后请求后台数据服务，拿到真正的数据，做到局部刷新，这时候接收的是数据而不是模板
- 三列布局  
    1. 定位实现
        左右两列绝对定位并且固定宽度；
        中间元素自适应，且左右margin设置为左右元素的宽度；
        缺点：当出现滚动条时，内容区在滚动条后边显示，而且内容区仍旧被压缩(不推荐使用)
    2. 浮动
        注意： middle一定要放在三列元素的最后面
        缺点：如果有文字出现，布局就会错乱，导致扩展性不好。
    3. 圣杯布局
        随着页面宽度的变化，三栏布局中的中间盒子优先自适应渲染，两边盒子宽度固定不变
        - 步骤
            1. 布局：有头，有尾，有内容，middle部分要放在content的最前部分，然后是left，reight；
            2. 浮动让三者在一行，出现高度塌陷，content清浮动；
            3. middle宽度设为100%，占满；
            4. left上去，拉到最左边：margin-left: -100%; right同理：margin-left:-200px;
            5. middle内容被left、right覆盖未显示，所以把middle内容拉回来，content:{padding: 0 200px};
            6. 此时lefe和right都跟着被拉回来了，左右空出了200px。所以用相对定位把left,right拉回来
        代码：html5/exer/sblayout
    4. flex布局
        顺着主轴依次放3列，内容在最前，通过order控制显示顺序，通过flex-grow让中间占据全部剩余空间，通过flex-basis设置左、右div的宽度。
- 如何在低版本浏览器使用箭头函数
    1. 下载polyfill
        npm install babel-polyfill --save
    2. 页面中引用"polyfill.js" 和 "browser.min.js"
    3. JS代码script标签加上 type="text/babel"
        <script type="text/babel"></script>
- 构造函数方法和原型上方法的区别
    1. 把方法写在原型中比写在构造函数中消耗的内存更小，因为在内存中一个类的原型只有一个，写在原型中的行为可以被所有实例共享，实例化的时候并不会在实例的内存中再复制一份
    而写在类中的方法，实例化的时候会在每个实例中再复制一份，所以消耗的内存更高
    2. 构造函数中定义的属性和方法要比原型中定义的属性和方法的优先级高，如果定义了同名称的属性和方法，构造函数中的将会覆盖原型中的方法
    3. 定义在构造函数prototype上的属性，不会被序列化。
- HTTP和HTTPS的区别
    1. http超文本传输协议，https安全超文本传输协议，是使用了TLS/SSL加密的HTTP协议
    2. https 协议需要到 ca 申请证书。
    3. http 是超文本传输协议，信息是明文传输，https 则是具有安全性的 ssl 加密传输协议。
    4. http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。
    5. http 的连接很简单，是无状态的；HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 http 协议安全。
- 水平垂直居中
    1. margin:auto实现绝对定位元素的居中
    2. margin 负间距
    3. Transforms 变形
    4. 父元素弹性布局 display:flex;justify-content:center;align-items:center;
        注意：要给body高度，body是块级元素由内容决定宽高
    5. 将父盒子设置为table-cell元素，可以使用text-align:center和vertical-align:middle实现水平、垂直居中。
- position
    absolute: 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
    fixed: 生成绝对定位的元素，相对于浏览器窗口进行定位。
    relative: 生成相对定位的元素，相对于其正常位置进行定位。
    inherit: 规定应该从父元素继承 position 属性的值。
- 网站的布局中的固钉怎么实现(吸顶功能)
    - 相对于窗口
        1. 通过 window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop 获取滚动高度
        2. 当滚动高度大于指定高度时，设置绝对定位
        API： pageYOffset pageXOffset scrollTop scrollLeft 
- cookie
    - 客户端操作
        //读取浏览器中的cookie
        console.log(document.cookie);
        //写入cookie
        document.cookie='值';
    - HttpOnly
        这个属性是面试的时候常考的，如果这个属性设置为true，就不能通过js脚本来获取cookie的值，能有效的防止xss攻击
    - Expires 有效期
        Max-Age，是以秒为单位的，Max-Age为正数时，cookie会在Max-Age秒之后，被删除，当Max-Age为负数时，表示的是临时储存，不会生出cookie文件，只会存在浏览器内存中，且只会在打开的浏览器窗口或者子窗口有效，一旦浏览器关闭，cookie就会消失，当Max-Age为0时，会删除cookie，它实现的就是让cookie失效。
    - 服务端操作
        setCookie
    - Domain和path
        Domain 标识指定了哪些主机可以接受Cookie。如果不指定，默认为当前文档的主机（不包含子域名）。如果指定了Domain，则一般包含子域名。
        Path 标识指定了主机下的哪些路径可以接受Cookie（该URL路径必须存在于请求URL中）。以字符 %x2F ("/") 作为路径分隔符，子路径也会被匹配。
- sessionStorage
    - 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据
    - 语法
        保存数据语法：sessionStorage.setItem("key", "value")
        读取数据语法：sessionStorage.getItem("key")
        删除指定键的数据语法：sessionStorage.removeItem("key")
        删除所有数据：sessionStorage.clear()
- localStorage
    - localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去删除。
    localStorage 属性是只读的。
    保存数据语法：localStorage.setItem("key", "value")
    读取数据语法：localStorage.getItem("key")
    删除数据语法：localStorage.removeItem("key")
- 一个tcp连接能发几个http请求
    - HTTP 1.0 版本协议
        一般情况下，不支持长连接，因此在每次请求发送完毕之后，TCP 连接即会断开，因此一个 TCP 发送一个 HTTP 请求，但是有一种情况可以将一条 TCP 连接保持在活跃状态，那就是通过 Connection 和 Keep-Alive 首部，在请求头带上 Connection: Keep-Alive，并且可以通过 Keep-Alive 通用首部中指定的，用逗号分隔的选项调节 keep-alive 的行为，如果客户端和服务端都支持，那么其实也可以发送多条，不过此方式也有限制，可以关注《HTTP 权威指南》4.5.5 节对于 Keep-Alive 连接的限制和规则。
    - HTTP 1.1 版本协议
        支持了长连接，因此只要 TCP 连接不断开，便可以一直发送 HTTP 请求，持续不断，没有上限
    - HTTP 2.0 版本协议
        支持多用复用，一个 TCP 连接是可以并发多个 HTTP 请求的，同样也是支持长连接，因此只要不断开 TCP 的连接，HTTP 请求数也是可以没有上限地持续发送
- Virtual DOM 的优势
    - DOM 引擎、JS 引擎 相互独立，但又工作在同一线程（主线程）
        JS 代码调用 DOM API 必须 挂起 JS 引擎、转换传入参数数据、激活 DOM 引擎，DOM 重绘后再转换可能有的返回值，最后激活 JS 引擎并继续执行若有频繁的 DOM API 调用，且浏览器厂商不做“批量处理”优化，
        引擎间切换的单位代价将迅速积累若其中有强制重绘的 DOM API 调用，重新计算布局、重新绘制图像会引起更大的性能消耗。
    - VDOM 和真实 DOM 的区别和优化：
        虚拟 DOM 不会立马进行排版与重绘操作
        虚拟 DOM 进行频繁修改，然后一次性比较并修改真实 DOM 中需要改的部分，最后在真实 DOM 中进行排版与重绘，减少过多DOM节点排版与重绘损耗
        虚拟 DOM 有效降低大面积真实 DOM 的重绘与排版，因为最终与真实 DOM 比较差异，可以只渲染局部
- common.js 和es6中模块化的区别
    CommonJS 模块输出的是一个值的拷贝，模块内部改变不影响这个值，ES6 模块输出的是值的引用，模块内部的改变会影响引用的改变
    CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
    CommonJs 是单个值导出，ES6 Module可以导出多个
    CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层
    CommonJs 的 this 是当前模块，ES6 Module的 this 是 undefined
- Cookie Token 和 Session的区别
    参考阿里呀羽 https://github.com/mqyqingfeng/Blog/issues/157
- 如何选择图片格式
    https://juejin.im/post/5e7426d15188254967069c00
- javascript 事件触发的三个阶段
    CAPTURING_PHASE，即捕获阶段
    AT_TARGET，即目标阶段
    BUBBLING_PHASE，即冒泡阶段
    1. 事件监听
        HTML 内联属性
        DOM属性绑定
        事件监听函数
            type：监听事件类型的字符串
            listener：是一个实现了 EventListener 接口的对象，或者是一个函数。
            options(可选)：
                capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
                once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
                passive: Boolean，设置为true时，表示 listener 永远不会调
            useCapture：true为捕获false为冒泡
        移除事件监听：removeEventListener
        事件代理：只监听父节点的事件触发，以来代理对其后代节点的监听，通过currentTarget属性得到触发元素并作出回应
- 异步解决方案：
    回调函数(callback)
    promise
    async/await
- 进程通信
    管道
    信号量：信号量是一个计数器，可以用来控制多个进程对共享资源的访问，主要作为进程同步的手段。
    消息队列
    套接字通信
- 跨域
    1. jsonp
    2. CORS 跨域资源共享
      简单请求：
        请求方法：HEAD GET POST
        头部信息：Accept Accept-Language Content-Language Last-Event-ID
          Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
      非简单请求
    3. nginx代理
      本质是服务器端通信没有跨域问题
- 如何保证高质量代码
    编程风格：eslint
    设计模式
    保证代码的正确性 TDD 测试驱动开发 Test Drive Development
