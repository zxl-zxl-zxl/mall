// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueLazyload from "vue-lazyload";
import infiniteScroll from "vue-infinite-scroll";
import Vuex from "Vuex";

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  loading: "/static/loading-svg/loading-bars.svg"
});
Vue.use(infiniteScroll);
Vue.use(Vuex);

const store = new Vuex.store({
  state: {
    nickName: "",
    cartCount: 0
  },
  mutations: {
    updateUserInfo(state, nickName) {
      state.nickName = nickName;
    },
    updateCartCount(state,cart){
      state.cartCount+=cartCount
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
