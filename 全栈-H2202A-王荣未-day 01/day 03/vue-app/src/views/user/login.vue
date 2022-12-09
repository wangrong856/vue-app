<template>
  <div class="login">
    <div class="context">
      <div class="login_header"></div>
      <el-form :model="loginForm" :rules="rulesFrom" ref="loginFrom">
        <el-form-item prop="mobile">
          <el-input
            type="text"
            v-model="loginForm.mobile"
            placeholder="请输入手机号"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-s-goods"
            :show-password="true"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :loading="switchLoading" @click="userLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "@/utils/request";
export default {
  name: "VueAppLogin",

  data() {
    return {
      loginForm: {
        mobile: "13800000002",
        password: "123456",
      },
      rulesFrom: {
        mobile: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
      switchLoading: false,
    };
  },

  mounted() {},

  methods: {
    ...mapActions("login", ["usersLogin"]),
    userLogin() {
      this.$refs.loginFrom.validate((v) => {
        if (!v) return this.$message.error("校验失败");
      });
      this.usersLogin(this.loginForm);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/images/login.jpg);
  background-position: 50%;
  position: relative;
  .context {
    position: absolute;
    width: 450px;
    height: 56%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .login_header {
      width: 97%;
      margin-left: 4px;
      height: 44px;
      background: url(@/assets/images/login-logo.758b34e9.png);
      margin-bottom: 43px;
    }
    ::v-deep .el-input {
      //   margin-bottom: 20px;
      input {
        width: 450px;
        background-color: rgb(217, 227, 253);
        height: 52px;
        border: none;
        color: #68b0fe;
      }
    }
    ::v-deep .el-button {
      width: 450px;
      height: 64px;
      background: rgb(80, 125, 246);
      color: #fff;
      border: none;
      font-size: 20px;
      font-family: serif;
    }
    ::v-deep .el-form-item__error {
      color: #fff;
    }
  }
}
</style>
