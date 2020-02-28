<template>
  <div class="footer">
    <div class="footer-logo" v-if="showLogo">
      <img src="/imgs/logo-footer.png" alt />
      <p href>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://anpeier.github.io/" target="_blank">安培儿主页</a>
      <span>|</span>
      <a href="javascript:;">Vue学习</a>
      <span>|</span>
      <a href="javascript:;">微信小程序学习</a>
      <span>|</span>
      <a href="javascript:;">Node学习</a>
      <span>|</span>
      <a href="javascript:;">Java学习</a>
    </div>
    <div class="copyright">
      Copyright @2019
      <span class="domain">anpeier.github.io</span>欢迎访问
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
  props: {
    showLogo: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 10px;
  }
  .copyright {
    .domain {
      color: #ff6600;
    }
  }
}
</style>