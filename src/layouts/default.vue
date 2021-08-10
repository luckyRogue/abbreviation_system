<template>
  <a-layout class="layout-x">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      width="300"
    >
      <div class="logo">多云36.4</div>
      <Menu></Menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header-x">
        <img :src="logo" width="50" /> 铜陵经济开发区智慧园区安全环保监测系统
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { Layout } from "ant-design-vue";
import Menu from "@/components/menu";
import logo from "@/assets/logo.png";
export default {
  components: {
    "a-layout": Layout,
    "a-layout-sider": Layout.Sider,
    "a-layout-header": Layout.Header,
    "a-layout-content": Layout.Content,
    Menu,
  },
  data() {
    return {
      logo,
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

<style scoped>
.layout-x {
  height: 100%;
}
.layout-x .logo {
  height: 40px;
  line-height: 40px;
  background: #000127;
  margin: 16px 30px;
  color: #fff;
  padding: 0 30px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
}
.header-x {
  font-size: 24px;
  color: #fff;
  text-align: center;
}
</style>
