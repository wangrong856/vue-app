<template>
  <div class="homeHeader">
    <div class="h_svg">
      <svg-icon
        iconClass="zhankai"
        w="1.4"
        h="1.3"
        color="#fff"
        v-show="!switchMenu"
        @click.stop.native="switchIcon(true)"
      ></svg-icon>
      <svg-icon
        iconClass="shouqi"
        w="1.4"
        h="1.3"
        color="#fff"
        v-show="switchMenu"
        @click.stop.native="switchIcon(false)"
      ></svg-icon>
    </div>
    <div class="h_con">
      <span class="user_select">江苏传智播客教育科技股份有限公司</span>
      <div class="con_c">体验版</div>
    </div>
    <div class="h_right">
      <div class="right_left">
        <svg-icon
          iconClass="language"
          style="width: 1.2rem; height: 1.5rem; margin: 0 10px"
          color="#fff"
        ></svg-icon>
        <svg-icon
          iconClass="fullscreen"
          style="width: 1.2rem; height: 1.5rem; margin: 0 10px"
          color="#fff"
        ></svg-icon>
      </div>
      <el-dropdown @command="commandSwitch">
        <span class="el-dropdown-link">
          <img :src="userImg" v-imgError="defaultImg" />
          {{ userName }}<i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="home">首页</el-dropdown-item>
          <el-dropdown-item command="git">项目地址</el-dropdown-item>
          <el-dropdown-item divided command="out">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeHeader",
  data() {
    return {
      defaultImg: require("@/assets/logo.png"),
      switchMenu: false,
    };
  },
  methods: {
    commandSwitch(v) {
      if (v === "out") {
        this.$store.dispatch("login/loginOut");
        this.$router.push("/login");
        console.log(1);
      } else if (v === "git") {
        console.log(2);
      } else if (v === "home") {
        if (this.$route.path === "/home") {
        } else {
          this.$router.push("/");
        }
      }
    },
    switchIcon(v) {
      this.switchMenu = !this.switchMenu;
      this.$emit("switchIcon", v);
    },
  },
  computed: {
    ...mapGetters(["userName", "userImg"]),
  },
};
</script>

<style lang="scss" scoped>
.homeHeader {
  width: 100%;
  height: 100%;
  display: flex;
  .h_svg {
    width: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .h_con {
    width: 70%;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    .con_c {
      width: 68px;
      height: 28px;
      background: #8ba7f7;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
      border-radius: 9px;
      font-weight: 349;
      font-size: 13px;
    }
    .user_select{
        user-select: none;
    }
  }
  .h_right {
    width: 26%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .right_left {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 30px;
      height: 30px;
      vertical-align: middle;
      border-radius: 50px;
      margin-right: 4px;
    }
    .el-dropdown {
      color: #fff;
    }
  }
}
::v-deep .el-dropdown-menu__item {
  width: 100px;
}
</style>
