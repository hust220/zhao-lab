// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import Home from './components/Home'
import People from './components/People'
import Publications from './components/Publications'
import Serv1 from './components/Serv1'
import Serv2 from './components/Serv2'
import Resources from './components/Resources'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/people', component: People },
    { path: '/publications', component: Publications },
    { path: '/serv1', component: Serv1 },
    { path: '/serv2', component: Serv2 },
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
