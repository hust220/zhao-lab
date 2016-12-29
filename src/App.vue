<template>
  <div id="app">
    <el-row>
      <el-col :span="20" :offset="2">
        <demo></demo>
      </el-col>
    </el-row>
    <top-nav></top-nav>
    <el-row>
      <el-col :span="20" :offset="2">
        <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import Hello from './components/Hello'
  import TopNav from './components/TopNav'
  import Demo from './components/Demo'

  export default {
    name: 'app',
    components: {
      'hello': Hello,
      'top-nav': TopNav,
      'demo': Demo
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
}
</style>