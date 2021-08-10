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
function ToxicGasSystem_DynamicTraceability() {
  return import(
    /* webpackChunkName: "page-ToxicGasSystem-DynamicTraceability" */ '@/pages/ToxicGasSystem/DynamicTraceability.vue'
  )
}
function ToxicGasSystem_SimulatedDiffusion() {
  return import(
    /* webpackChunkName: "page-ToxicGasSystem-SimulatedDiffusion" */ '@/pages/ToxicGasSystem/SimulatedDiffusion.vue'
  )
}

export default [
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
  {
    name: 'ToxicGasSystem-DynamicTraceability',
    path: 'ToxicGasSystem/DynamicTraceability',
    component: ToxicGasSystem_DynamicTraceability,
  },
  {
    name: 'ToxicGasSystem-SimulatedDiffusion',
    path: 'ToxicGasSystem/SimulatedDiffusion',
    component: ToxicGasSystem_SimulatedDiffusion,
  },
]
