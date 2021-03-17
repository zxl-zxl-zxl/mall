<template>
  <div>
    <nav-header></nav-header>
    <div class="container">
      <div class="page-title-normal">
        <h2 class="page-title-h2"><span>订单 完成</span></h2>
      </div>
      <!-- 进度条 -->
      <div class="check-step">
        <ul>
          <li class="cur"><span>确认</span> 地址</li>
          <li class="cur"><span>查看你的</span> 订单</li>
          <li class="cur"><span>付</span> 款</li>
          <li class="cur"><span>订单</span> 确认</li>
        </ul>
      </div>

      <div class="order-create">
        <div class="order-create-pic"><img
            src="/static/ok-2.png"
            alt=""
          ></div>
        <div class="order-create-main">
          <h3>恭喜! <br>您的订单完成!</h3>
          <p>
            <span>订单编号：{{orderId}}</span>
            <span>订单总金额：{{orderTotal | currency('￥')}}</span>
            <span>取件码：{{pickupCode}}</span>
          </p>
          <div class="order-create-btn-wrap">
            <div class="btn-l-wrap">
              <!-- <a class="btn btn--m">Cart List</a> -->
              <router-link
                class="btn btn--m"
                to="/cart"
              >购物车列表</router-link>
            </div>
            <div class="btn-r-wrap">
              <!-- <a class="btn btn--m">Goods List</a> -->
              <router-link
                class="btn btn--m"
                to="/"
              >商品列表</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from "@/components/NavHeader.vue";
import NavFooter from "@/components/NavFooter.vue";
import axios from "axios";
import { currency } from "@/util/currency";
export default {
  data() {
    return {
      orderId: "",
      orderTotal: 0,
      pickupCode: "",
    };
  },
  components: {
    NavHeader,
    NavFooter,
  },
  filters: {
    currency: currency,
  },
  mounted() {
    var orderId = this.$route.query.orderId;
    if (!orderId) {
      return;
    }
    axios
      .get("/users/orderDetail", {
        params: { orderId: orderId },
      })
      .then((response) => {
        let res = response.data;
        if (res.status == "0") {
          this.orderId = orderId;
          this.orderTotal = res.result.orderTotal;
          this.pickupCode = res.result.pickupCode;
        }
      });
  },
};
</script>
