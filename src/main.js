// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import Home from './components/Home'
import News from './components/News'
import Research from './components/Research'
import People from './components/People'
import Services from './components/Services'
import Publications from './components/Publications'
import Dca from './components/services/Dca'
import Network from './components/services/Network'
import NetworkPython from './components/services/NetworkPython'
import ComplexDistance from './components/services/ComplexDistance'
import DynamicalContact from './components/services/DynamicalContact'
import DynamicalCorrelation from './components/services/DynamicalCorrelation'
import StructureDistance from './components/services/StructureDistance'
import Resources from './components/Resources'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

var bus = new Vue()

const router = new VueRouter({
  routes: [
    { path: '/', component: Services },
    { path: '/home', component: Home },
    { path: '/news', component: News },
    { path: '/research', component: Research },
    { path: '/people', component: People },
    { path: '/publications', component: Publications },
    { path: '/DCA', component: Dca },
    { path: '/network', component: Network },
    { path: '/network-python', component: NetworkPython },
    { path: '/complex-distance', component: ComplexDistance },
    { path: '/dynamical-contact', component: DynamicalContact },
    { path: '/dynamical-correlation', component: DynamicalCorrelation },
    { path: '/structure-distance', component: StructureDistance },
    { path: '/resources', component: Resources },
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  render: h => h(App),
  router,
  components: { App },
})
