<template>
  <div class="search">
    <div class="head">
      <div>
        <img src="/static/images/search.png" alt />
        <input type="text" confirm-type="search" focus="true" v-model="words"/>
        <img @click="clearInput" class="del" src="/static/images/x.png" alt />
      </div>
      <div @click="cancle">取消</div>
    </div>
    <div class="searchtips"  v-if="words">
      <div>亚索</div>
      <div class="nogoods">数据库暂无此类商品</div>
    </div>
    <div class="history">
      <div class="t">
        <div>历史记录</div>
        <div @click="clearHistory"></div>
      </div>
      <div class="cont">
          <div>日式</div>
      </div>
    </div>
    <div class="history hotsearch">
      <div class="t">
        <div>热门搜索</div>
      </div>
      <div class="cont">
          <div class="active">日式</div>
          <div>aaa</div>
          <div>bbb</div>
          <div>ccc</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: ""
    };
  },
  methods: {
    clearInput() {
      this.words = ''
    },
    cancle() {},
    clearHistory() {}
  }
};
</script>

<style lang="less">
@import "./style.less";
</style>