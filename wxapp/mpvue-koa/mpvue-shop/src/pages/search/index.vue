<template>
  <div class="search">
    <div class="head">
      <div>
        <img src="/static/images/search.png" alt />
        <input
          type="text"
          confirm-type="search"
          placeholder="商品搜索"
          focus="true"
          v-model="words"
          @focus="inputFoucs"
          @input="tipSearch"
          @confirm="searchWords"
        />
        <img @click="clearInput" class="del" src="/static/images/x.png" alt />
      </div>
      <div @click="cancle">取消</div>
    </div>
    <div class="searchtips" v-if="words">
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
import { get, post } from "../../utils";
export default {
  data() {
    return {
      words: "",
      openid: '',
      hotData: [],
      historyData: []
    };
  },
  mounted(){
    this.openId = wx.getStorageSync('openid' || '')
    console.log(this.openid)
  },
  methods: {
    clearInput() {
      this.words = "";
    },
    cancle() {},
    clearHistory() {},
    inputFoucs() {},
    tipSearch() {},
    async searchWords(e) {
      let val = e.target.value;
      this.words = val || this.words;
      const data = await post("/search/addhistoryaction", {
        openId: this.openid,
        keyword: val || this.words
      });
      console.log(data)
      // 获取历史记录
      this.getHotSearch();
    },
    async getHotSearch(first) {
      const data = await get("/search/indexaction?openId=" + this.openid);
      this.hotData = data.hotData;
      this.historyData = data.historyData;
      console.log(data)
    }
  }
};
</script>

<style lang="less">
@import "./style.less";
</style>