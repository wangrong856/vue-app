<template>
  <div class="login">
    <div class="avatar_box">
      <img src="@/assets/logo.png" />
    </div>
    <div class="center_box">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
        style="padding: 18% 1.25rem"
      >
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            prefix-icon="iconfont icon-3702mima"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="$refs.ruleForm.resetFields()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueAppLogin",

  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  mounted() {},

  methods: {
    async submitForm() {
      let { data, meta } = await this.$http.post("login", this.ruleForm);
      if (meta.status == 200) {
        this.$message.success(meta.msg);
        localStorage.token = data.token;
        this.$router.push("/MainPage");
      } else {
        this.$message.error("登录失败," + meta.msg);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(
    to right top,
    #b381dc,
    #eb81c0,
    #ff8ea1,
    #ffa889,
    #ffc682,
    #e6d887,
    #c8e89b,
    #a9f5bc,
    #81f2e2,
    #7deafe,
    #9ddeff,
    #c4d0ff
  );
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #ffff;
    border-radius: 50%;
    padding: 10px;
    -webkit-box-shadow: 0 0 10px #ddd;
    box-shadow: 0 0 10px #ddd;
    // background-color: #fff;
    background-image: linear-gradient(
      to right top,
      #b381dc,
      #eb81c0,
      #ff8ea1,
      #ffa889,
      #ffc682,
      #e6d887,
      #c8e89b,
      #a9f5bc,
      #81f2e2,
      #7deafe,
      #9ddeff,
      #c4d0ff
    );
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%, -120%);
    transform: translate(-50%, -120%);
    opacity: 0;
    animation-name: identifier;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-delay: 0.1s;
    z-index: 999;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }

  .center_box {
    width: 28.125rem;
    height: 18.75rem;
    padding: 0px 0px;
    border-radius: 0.4375rem;
    opacity: 0;
    animation-name: identifier;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-delay: 0.1s;
    // background-image: linear-gradient(to right top, #f3ae8e, #e0c288, #c2d699, #a2e5bd, #8cf0e9);
  }
}

::v-deep .el-form-item__content {
  display: flex;
  justify-content: flex-end;
}

@keyframes identifier {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  70% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
</style>
