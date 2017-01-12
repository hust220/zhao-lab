<template>
  <div id="app">
    <!-- Top -->
    <el-row>
      <el-col :span="18" :offset="3">
        <top></top>
      </el-col>
    </el-row>

    <!-- TopNav-->
    <top-nav></top-nav>

    <!-- Demo -->
    <demo v-if="showDemo"></demo>

    <!-- Page -->
    <el-row>
      <el-col :span="18" :offset="3">
        <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import Top from './components/Top'
  import TopNav from './components/TopNav'
  import Demo from './components/Demo'
  import { bus } from './bus.js'

  export default {
    name: 'app',
    data() {
      return {
        showDemo: false
      }
    },
    created() {
      var v = this
      bus.$on('show-demo', function () {
        v.showDemo = true
      })
      bus.$on('hide-demo', function () {
        v.showDemo = false
      })
    },
    components: {
      'top-nav': TopNav,
      'demo': Demo,
      'top': Top
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
body {
  margin: 0px;
}
</style>
