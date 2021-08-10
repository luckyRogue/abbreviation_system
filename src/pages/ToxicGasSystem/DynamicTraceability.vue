<template>
  <div class="map-x">
    <div id="dynamicMap" class="map-x"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initDate();
  },
  methods: {
    initDate() {
      this.map = L.map("dynamicMap", {
        center: [40.02404009136253, 116.50641060224784], // 地图中心
        zoom: 14, //缩放比列
        zoomControl: false, //禁用 + - 按钮
        doubleClickZoom: false, // 禁用双击放大
        attributionControl: false, // 移除右下角leaflet标识
      });
      let name = L.tileLayer(
        "http://mt0.google.cn/vt/lyrs=y@160000000&hl=zh-CN&gl=CN&src=app&y={y}&x={x}&z={z}&s=Ga"
      ).addTo(this.map);
      //   this.map.removeLayer(name)  // 移除图层
    },
  },
};
</script>

<style lang="scss" scoped></style>
