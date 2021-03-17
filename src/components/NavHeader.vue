<template>
  <header class="header">
    <svg
      style="position: absolute; width: 0; height: 0; overflow: hidden;"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol
          id="icon-arrow-short"
          viewBox="0 0 25 32"
        >
          <title>arrow-short</title>
          <path
            class="path1"
            d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"
          ></path>
        </symbol>
        <symbol
          id="icon-status-ok"
          viewBox="0 0 32 32"
        >
          <title>status-ok</title>
          <path
            class="path1"
            d="M22.361 10.903l-9.71 9.063-2.998-2.998c-0.208-0.209-0.546-0.209-0.754 0s-0.208 0.546 0 0.754l3.363 3.363c0.104 0.104 0.241 0.156 0.377 0.156 0.131 0 0.261-0.048 0.364-0.143l10.087-9.414c0.215-0.201 0.227-0.539 0.026-0.754s-0.539-0.226-0.754-0.026z"
          ></path>
          <path
            class="path2"
            d="M16 30.933c-8.234 0-14.933-6.699-14.933-14.933s6.699-14.933 14.933-14.933c8.234 0 14.933 6.699 14.933 14.933s-6.699 14.933-14.933 14.933zM16 0c-8.822 0-16 7.178-16 16 0 8.823 7.178 16 16 16s16-7.177 16-16c0-8.822-7.178-16-16-16z"
          ></path>
        </symbol>
        <symbol
          id="icon-cart"
          viewBox="0 0 38 32"
        >
          <title>cart</title>
          <path
            class="path1"
            d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"
          ></path>
          <path
            class="path2"
            d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"
          ></path>
          <path
            class="path3"
            d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"
          ></path>
          <path
            class="path4"
            d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"
          ></path>
        </symbol>
      </defs>
    </svg>
    <div class="navbar">
      <span
        class="page-title-back page-title-home"
        @click="backTo"
        v-if="this.$route.path=='/'"
      >
        <svg
          t="1615966198427"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6574"
          width="30"
          height="30"
        >
          <path
            d="M947.2 416L576 102.4c-35.2-30.4-88-30.4-123.2 0L76.8 416c-8 6.4-12.8 14.4-12.8 25.6 0 17.6 14.4 32 32 32 8 0 16-3.2 20.8-8L128 456v356.8c0 72 54.4 131.2 123.2 131.2h521.6C840 944 896 884.8 896 812.8V456l9.6 8c6.4 4.8 12.8 8 22.4 8 17.6 0 32-14.4 32-32 0-8-4.8-17.6-12.8-24zM448 880V656c0-17.6 14.4-32 32-32h64c17.6 0 32 14.4 32 32v224H448z m384-67.2c0 36.8-27.2 67.2-60.8 67.2H640V656c0-52.8-43.2-96-96-96h-64c-52.8 0-96 43.2-96 96v224H252.8c-33.6 0-60.8-30.4-60.8-67.2V403.2L492.8 152c11.2-9.6 28.8-9.6 41.6 0L832 401.6v411.2z"
            p-id="6575"
          ></path>
        </svg>
      </span>
      <span
        class="page-title-back"
        @click="backTo"
        v-if="this.$route.path!='/'"
      >
        <svg
          t="1615949969516"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2011"
          width="19"
          height="19"
        >
          <path
            d="M407.00928 512l286.00832-286.00832a35.84 35.84 0 0 0-50.68288-50.68288L330.9824 486.656a35.84 35.84 0 0 0 0 50.68288l311.35744 311.35232a35.84 35.84 0 0 0 50.68288-50.68288L407.00928 512z"
            fill="#666666"
            p-id="2012"
          ></path>
        </svg>
      </span>
      <div class="navbar-left-container">
        <a
          href="/"
          class="nav-home"
        >
          <img
            class="navbar-brand-logo"
            src="/static/logo.png"
          >
        </a>
        <span class="nav-title">汝好茶餐厅汝好茶餐厅</span>
      </div>
      <div
        class="navbar-right-container"
        style="display: flex;"
      >
        <div class="navbar-menu-container">
          <span
            class="navbar-link nickName"
            v-text="nickName"
            v-if="nickName"
          ></span>
          <a
            href="javascript:void(0)"
            class="navbar-link login"
            @click="loginModalFlag=true"
            v-if="!nickName"
          >Login</a>
          <a
            href="javascript:void(0)"
            class="navbar-link"
            @click="logOut"
            v-else
          >Logout</a>

          <div class="navbar-cart-container">
            <span
              class="navbar-cart-count"
              v-text="cartCount"
              v-if="cartCount>0"
            ></span>
            <a
              class="navbar-link navbar-cart-link"
              href="/cart"
            >
              <svg class="navbar-cart-logo">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#icon-cart"
                ></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="md-modal modal-msg md-modal-transition"
      v-bind:class="{'md-show':loginModalFlag}"
    >
      <div class="md-modal-inner">
        <div class="md-top">
          <div class="md-title">Login in</div>
          <button
            class="md-close"
            @click="loginModalFlag=false"
          >Close</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <div class="error-wrap">
              <span
                class="error error-show"
                v-show="errorTip"
              >用户名或者密码错误</span>
            </div>
            <ul>
              <li class="regi_form_input">
                <i class="icon IconPeople"></i>
                <input
                  type="text"
                  tabindex="1"
                  name="loginname"
                  v-model="userName"
                  class="regi_login_input regi_login_input_left"
                  placeholder="User Name"
                  data-type="loginname"
                >
              </li>
              <li class="regi_form_input noMargin">
                <i class="icon IconPwd"></i>
                <input
                  type="password"
                  tabindex="2"
                  name="password"
                  v-model="userPwd"
                  class="regi_login_input regi_login_input_left login-input-no input_text"
                  placeholder="Password"
                  @keyup.enter="login"
                >
              </li>
            </ul>
          </div>
          <div class="login-wrap">
            <a
              href="javascript:;"
              class="btn-login"
              @click="login"
            >登 录</a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="md-overlay"
      v-if="loginModalFlag"
      @click="loginModalFlag=false"
    ></div>
  </header>
</template>
<style>
.header {
  width: 100%;
  background-color: white;
  font-family: "moderat", sans-serif;
  font-size: 16px;
  position: fixed;
  top: 0;
  z-index: 99;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 63px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 20px 10px 20px;
}
.navbar-left-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: -37px;
  font-size: 12px;
}
.navbar-left-container img {
  width: 80%;
  height: 100%;
  border-radius: 50%;
}
.navbar-brand-logo {
  /*width: 120px;*/
}
.header a,
.footer a {
  width: 50%;
  height: 80%;
  color: #666;
  text-decoration: none;
}
a {
  -webkit-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
}
.navbar-right-container {
  display: none;
  justify-content: flex-start;
  align-items: center;
}
.navbar-menu-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.navbar-link {
  margin-right: 12px;
}
.navbar-cart-container {
  position: relative;
}
.navbar-cart-count {
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -9px;
  right: 6px;
  width: 20px;
  border-radius: 10px;
  color: white;
  background-color: #eb767d;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
.navbar-cart-logo {
  width: 25px;
  height: 25px;
  transform: scaleX(-1);
}
.nickName {
  font-weight: bold;
  /* color: rgb(180, 88, 88); */
  color: #ee7a23;
}
.login {
  padding: 3px 5px;
  border: 2px solid rgb(180, 88, 88);
  border-radius: 25px;
}
.nav-home {
  width: 20% !important;
  margin-left: 67px;
}
.nav-title {
  width: 70px;
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow:hidden; 
}
</style>
<script>
import "../assets/css/login.css";
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      userName: "",
      userPwd: "",
      errorTip: false, //账号密码错误提示显示
      loginModalFlag: false, //登录框显示
      // nickName: "", //用户登录后用户名显示
    };
  },
  computed: {
    /*     nickName() {
      return this.$store.state.nickName;
    },
    cartCount(){
       return this.$store.state.cartCount;
    } */
    ...mapState(["nickName", "cartCount"]),
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    login() {
      if (!this.userName || !this.userPwd) {
        this.errorTip = true;
        return; //不让继续往下走请求了
      }
      axios
        .post("/users/login", {
          userName: this.userName,
          userPwd: this.userPwd,
        })
        .then((response) => {
          let res = response.data;
          if (res.status == "0") {
            this.errorTip = false;
            this.loginModalFlag = false;
            // this.nickName = res.result.userName;
            this.$store.commit("updateUserInfo", res.result.userName);
            this.getCartCount(); //查询购物车商品数量
            //to do
          } else {
            this.errorTip = true;
          }
        });
    },
    //退出登录
    logOut() {
      axios.post("/users/logout").then((response) => {
        let res = response.data;
        if (res.status == "0") {
          // this.nickName = "";
          this.$store.commit("updateUserInfo", "");
          this.getCartCount(); //查询购物车商品数量
        }
      });
    },
    checkLogin() {
      // 检查是否登录
      axios.get("/users/checkLogin").then((response) => {
        console.log(response, "检查是否登录response");
        let res = response.data;
        // let path = this.$route.pathname;
        if (res.status == "0") {
          // this.nickName = res.result;
          this.$store.commit("updateUserInfo", res.result);
          this.getCartCount(); // 查询购物车商品数量
          // this.loginModalFlag = false;
        }
      });
    },
    // 查询购物车商品数量
    getCartCount() {
      axios.get("/users/getCartCount").then((response) => {
        let res = response.data;
        this.$store.commit("initCartCount", res.result);
      });
    },
    backTo() {
      if (this.$route.path == "/cart") {
        this.$router.push({ path: "/" });
      } else if (this.$route.path == "/address") {
        this.$router.push({ path: "/cart" });
      } else if (this.$route.path == "/orderConfirm") {
        this.$router.push({ path: "/address" });
      } else if (this.$route.path == "/orderSuccess") {
        this.$router.push({ path: "/" });
      }
    },
  },
};
</script>