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
          >
            <template>
              <i
                slot="prefix"
                class="el-input__icon"
                style="position: absolute; top: 3px"
              >
                <svg-icon iconClass="user" color="#8b99a3" size="16" />
              </i> </template
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :type="!switchEyes ? 'password' : 'text'"
            v-model="loginForm.password"
            placeholder="请输入密码"
          >
            <template>
              <div slot="prefix">
                <i
                  class="el-input__iconÍ"
                  style="position: absolute; top: 6px; left: 10px"
                >
                  <svg-icon iconClass="password" color="#8b99a3" />
                </i>
              </div>
            </template>
            <template>
              <div slot="suffix">
                <i
                  style="
                    position: absolute;
                    top: 8px;
                    right: 6px;
                    cursor: pointer;
                  "
                  @click="switchEye"
                  v-show="!switchEyes"
                >
                  <svg-icon iconClass="eye" color="#8b99a3" />
                </i>
                <i
                  style="
                    position: absolute;
                    top: 8px;
                    right: 6px;
                    cursor: pointer;
                  "
                  @click="switchEye"
                  v-show="switchEyes"
                >
                  <svg-icon iconClass="eye-open" color="#8b99a3" />
                </i>
              </div>
            </template>
          </el-input>
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
export default {
  name: "VueAppLogin",

  data() {
    return {
      loginForm: {
        mobile: "13800000002",
        password: "123456",
      },
      rulesFrom: {
        mobile: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: "手机号校验失败",
            trigger: "blur",
          },
        ],
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
      switchEyes: false,
    };
  },

  mounted() {},

  methods: {
    ...mapActions("login", ["loginSync"]),
    userLogin() {
      this.$refs.loginFrom.validate(async (v) => {
        if (v) {
          try {
            this.switchLoading = true;
            await this.loginSync(this.loginForm);
            this.$message.success("登录成功");
            this.$router.push("/");
            console.log(1);
          } catch (error) {
            return error;
          } finally {
            this.switchLoading = false;
          }
        } else {
          this.$message.error("校验失败");
        }
      });
    },
    switchEye() {
      this.switchEyes = !this.switchEyes;
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/common/login.jpg);
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
      background: url(@/assets/common/login-logo.png);
      margin-bottom: 43px;
    }
    ::v-deep .el-input {
      input {
        width: 450px;
        background-color: rgb(217, 227, 253);
        height: 52px;
        border: none;
        color: #68b0fe;
        padding-left: 45px;
      }
      .el-input__icon {
        margin: 1px 5px;
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
