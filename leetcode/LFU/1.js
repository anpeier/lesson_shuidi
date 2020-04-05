// 460. LFU缓存
// 设计并实现最不经常使用（LFU）缓存的数据结构。它应该支持以下操作：get 和 put。
// get(key) - 如果键存在于缓存中，则获取键的值（总是正数），否则返回 -1。
// put(key, value) - 如果键不存在，请设置或插入值。当缓存达到其容量时，
// 它应该在插入新项目之前，使最不经常使用的项目无效。在此问题中，
// 当存在平局（即两个或更多个键具有相同使用频率）时，最近最少使用的键将被去除。
// 进阶：
// 你是否可以在 O(1) 时间复杂度内执行两项操作？
// 示例：
// LFUCache cache = new LFUCache( 2 /* capacity (缓存容量) */ );
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回 1
// cache.put(3, 3);    // 去除 key 2
// cache.get(2);       // 返回 -1 (未找到key 2)
// cache.get(3);       // 返回 3
// cache.put(4, 4);    // 去除 key 1
// cache.get(1);       // 返回 -1 (未找到 key 1)
// cache.get(3);       // 返回 3
// cache.get(4);       // 返回 4

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.limit = capacity
  this.cache = new Map()
  this.freqMap = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  let cache = this.cache
  let r = -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {

};
