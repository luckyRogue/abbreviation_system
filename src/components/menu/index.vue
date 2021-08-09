
<template>
  <a-menu theme="dark" mode="inline">
    <a-sub-menu v-for="(item, index) in menuList" :key="index">
      <span slot="title"
        ><span>{{ item.label }}</span></span
      >
      <a-menu-item v-for="(menuItem, key) in item.children" :key="key">
        {{ menuItem.label }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import menuList from "./menu";
import { Menu } from "ant-design-vue";

export default {
  components: {
    "a-menu": Menu,
    "a-sub-menu": Menu.SubMenu,
    "a-menu-item": Menu.Item,
  },
  data() {
    return {
      menuList,
    };
  },
};
</script>

<style lang="scss" scoped>
