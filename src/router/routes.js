function about() {
  return import(/* webpackChunkName: "page-about" */ '@/pages/about.vue')
}
function EnvironmentalMonitoring_1() {
  return import(
    /* webpackChunkName: "page-EnvironmentalMonitoring-1" */ '@/pages/EnvironmentalMonitoring/1.vue'
  )
}
function EnvironmentalMonitoring_2() {
  return import(
    /* webpackChunkName: "page-EnvironmentalMonitoring-2" */ '@/pages/EnvironmentalMonitoring/2.vue'
  )
}

export default [
  {
    name: 'about',
    path: 'about',
    component: about,
  },
  {
    name: 'EnvironmentalMonitoring-1',
    path: 'EnvironmentalMonitoring/1',
    component: EnvironmentalMonitoring_1,
  },
  {
    name: 'EnvironmentalMonitoring-2',
    path: 'EnvironmentalMonitoring/2',
    component: EnvironmentalMonitoring_2,
  },
]
