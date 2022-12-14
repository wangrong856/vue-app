<template>
  <el-container>
    <el-aside :width="!switchMenu ? '200px' : '64px'">
      <div class="leftnavBg">
        <div class="leftnavBg_header">
          <img
            src="@/assets/common/logo.png"
            :width="!switchMenu ? '127px' : '36px'"
          />
        </div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="transparent"
          text-color="#fff"
          active-text-color="#fff"
          :collapse="switchMenu"
          router
        >
          <el-menu-item v-for="(t, i) in arrList" :key="i" :index="t.path + ''">
            <svg-icon
              :iconClass="t.icon"
              class="iconMenu"
              className="activeIcon"
              color="#fff"
            />
            <span slot="title">{{ t.name }}</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <home-header @switchIcon="switchIcon"></home-header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "LayOut",
  data() {
    return {
      switchMenu: null,
      arrList: [
        {
          name: "首页",
          path: "/dashboard",
          icon: "dashboard",
        },
        {
          name: "审批",
          path: "/approvals",
          icon: "tree-table",
        },
        {
          name: "组织架构",
          path: "/departments",
          icon: "tree",
        },
        {
          name: "员工",
          path: "/employees",
          icon: "people",
        },
        {
          name: "权限管理",
          path: "/permission",
          icon: "lock",
        },
        {
          name: "考勤",
          path: "/attendances",
          icon: "excel",
        },
        {
          name: "工资",
          path: "/salarys",
          icon: "money",
        },
        {
          name: "公司设置",
          path: "/setting",
          icon: "setting",
        },
        {
          name: "社保",
          path: "/social_securitys",
          icon: "table",
        },
      ],
    };
  },
  methods: {
    switchIcon(v) {
      this.switchMenu = v;
      console.log(this.switchMenu);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
  .el-aside {
    background-image: -webkit-linear-gradient(left, #3d6df8, #5b8cff);
    .leftnavBg {
      width: 100%;
      height: 100%;
      background: url(@/assets/common/leftnavBg.png) no-repeat 100% 100%;
      display: flex;
      flex-direction: column;
      .leftnavBg_header {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 90%;
          vertical-align: middle;
          cursor: pointer;
        }
      }
      .el-menu {
        border: none;
        .iconMenu {
          margin: 0px 19px 0px 0px;
          font-size: 18px;
        }
      }
    }
  }
  .el-header {
    height: 50px !important;
    background: -webkit-linear-gradient(bottom, #3d6df8, #5b8cff);
    padding: 0;
  }
}
::v-deep .el-menu-item:hover {
  background: #fff !important;
  color: #5b8cff !important;
  .activeIcon {
    fill: #5b8cff !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
