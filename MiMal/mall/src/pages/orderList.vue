<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tips>
        <span>谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="order" v-for="(item,index) in orderList" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{item.createTime}}
                <span>|</span>
                {{item.receiverName}}
                <span>|</span>
                订单号：{{item.orderNo}}
                <span>|</span>
                {{item.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix" v-for="(jtem,jdx) in item.orderItemVoList" :key="jdx">
              <div class="good-box fl">
                <div class="good-list">
                  <div class="good-img">
                    <img :src="jtem.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{jtem.productName}}</div>
                    <div class="p-money">{{jtem.currentUnitPrice}} X {{jtem.quantity}}</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="item.status == 20">
                <a href="javascript:;">{{item.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(item.orderNo)">{{item.statusDesc}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
export default {
  name: 'order-list',
  components: {
    OrderHeader
  },
  data() {
    return{
      orderList: []
    }
  },
  mounted() {
    this.getOrderList()
  },
  methods: {
    getOrderList() {
      this.axios.get('orders').then((res) => {
        this.orderList = res.list
      })
    },
    goPay(orderNo) {
      // this.$router.push(`/order/pay?orderNo=${orderNo}`)
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
      }
    }
  }
</style>