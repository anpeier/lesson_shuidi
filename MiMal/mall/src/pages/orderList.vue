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
          <loading v-if="loading"></loading>
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
            <div
              class="order-content clearfix"
              v-for="(jtem,jdx) in item.orderItemVoList"
              :key="jdx"
            >
              <div class="good-box fl">
                <div class="good-list">
                  <div class="good-img">
                    <img v-lazy="jtem.productImage" alt />
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
          <el-pagination
            class="pagination"
            v-if="!loading && orderList.length !=0"
            background
            layout="prev, pager, next"
            :total="total"
            :pageSize="10"
            @current-change="handleChange"
          ></el-pagination>
          <no-data v-if="!loading && orderList.length ==0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import Loading from "./../components/Loading";
import NoData from "./../components/NoData";
import { Pagination } from "element-ui";
export default {
  name: "order-list",
  components: {
    OrderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination // 动态加载变量
  },
  data() {
    return {
      orderList: [],
      loading: true,
      pageNum: 1,
      total: 0
    };
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    getOrderList() {
      this.axios
        .get("orders", {
          params: {
            pageNum: this.pageNum
          }
        })
        .then(res => {
          this.loading = false;
          this.orderList = res.list;
          this.total = res.total;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    goPay(orderNo) {
      // this.$router.push(`/order/pay?orderNo=${orderNo}`)
      this.$router.push({
        path: "/order/pay",
        query: {
          orderNo
        }
      });
    },
    handleChange(pageNum) {
      this.pageNum = pageNum;
      this.getOrderList();
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;
    .order-box {
      .order {
        @include border();
        background-color: $colorG;
        margin-bottom: 31px;
        &:last-child {
          margin-bottom: 0;
        }
        .order-title {
          @include height(74px);
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;
          .item-info {
            span {
              margin: 0 9px;
            }
          }
          .money {
            font-size: 26px;
            color: $colorB;
          }
        }
        .order-content {
          padding: 0 43px;
          .good-box {
            width: 88%;
            .good-list {
              display: flex;
              align-items: center;
              height: 145px;
              .good-img {
                width: 112px;
                img {
                  width: 100%;
                }
              }
              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }
          .good-state {
            @include height(145px);
            font-size: 20px;
            color: $colorA;
            a {
              color: $colorA;
            }
          }
        }
      }
      .pagination {
        text-align: right;
      }
      // 覆盖element-ui分页器颜色
      // .el-pagination.is-background .el-pager li:not(.disabled).active {
      //   background-color: #ff6600;
      // }
    }
  }
}
</style>