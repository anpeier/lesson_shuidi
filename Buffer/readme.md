## Buffer
Buffer是一个类似于Array的对象，主要用于操作字节，并且Buffer是二进制数据，它与字符串之间存在编码关系。
- 结构
  1. 模块结构
    JavaScript与C++结合
    性能相关部分用C++实现，非性能相关的部分用JavaScript实现
  2. Buffer对象
    Buffer对象类似于数组，它的元素为为16进制的数，即0到255的数。可以通过length属性访问长度。
    给Buffer元素赋值如果小于0，则逐次加256，大于255，则逐次减256直到得到0-255区间的数值，如果是小数，则舍弃小数部分。
  3. 内存分配
    1. 如果指定Buffer大小少于8KB，则按小对象的方式进行分配。
    2. 当需要超过8KB的Buffer对象，将创建一个SlowBuffer对象作为slab单元，并且被这个大Buffer独占。
- Buffer的转换
  支持的字符串编码类型：ASCII UTF-8 UTF-16LE/UCS-2 Base64 Binary Hex 
  字符串转Buffer主要通过构造函数：new Buffer(str,[encoding]),默认UTF-8编码
  Buffer转字符串可以通过Buffer对象的toString()方法
- Buffer的拼接
  在Buffer中，对应任意长度的Buffer，有可能出现宽字节字符被截断的情况。从而导致乱码。
  setEncoding内置了decoder对象，它自于string_decoder模块StringDecoder模块的实例对象。通过得知宽字节字符串是以3个字节的形式存储，因此在内部保留剩余字节，并与下一次的读取组合，再次以3的倍数转码，从而解决乱码，但是目前只能处理UTF-8，Base64，UTF-16LE/UCS-2的格式。
  正确拼接方式：是用一个数组接收到的有Buffer并记录下所有的片段总长度， 然后调用Buffer.concat()方法生成一个合并的Buffer对象。
- Buffer与性能
 在网络传输中，使用Buffer进行数据传输，可以极大提高网络吞吐量，并且将静态内容转化为Buffer对象，可以有效减少CPU的重复使用，节省服务器资源。
 文件读取：highWaterMark的设置对性能影响至关重要
     highWaterMark设置对Buffer内存的分配和使用有一定影响。
     highWaterMark设置过小，可能导致系统调用次数过多。