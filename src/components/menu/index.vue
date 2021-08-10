
<template>
  <a-menu theme="dark" mode="inline" @click="changeRoute">
    <a-sub-menu v-for="(item, index) in menuList" :key="index">
      <span slot="title"
        ><a-icon type="dashboard" /><span>{{ item.label }}</span></span
      >
      <a-menu-item v-for="(menuItem, key) in item.children" :key="menuItem.link" >
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
  methods: {
    changeRoute({key}) {
      if (this.$route.name === key) {
        return
      }
      this.$router.push({
        name: key
      })
    }
  },
};
</script>

<style lang="scss" scoped>
