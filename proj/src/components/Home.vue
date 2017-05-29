<template>
  <div class="home">
    <el-card class="intro">
      <el-row>
        <el-col :span="6">
          <img src="static/zyj.jpg">
        </el-col>
        <el-col :span="18" class="intro-text">
          <div v-html="intro"></div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  import { bus } from '../bus.js'

  export default {
    data() {
      return {
        intro: 'Introduction'
      }
    },
    created() {
      bus.$emit('show-demo')
      this.fetch_data()
    },
    watch: {
      '$route': 'fetch_data'
    },
    methods: {
      fetch_data() {
        var v = this
        this.$http.get('./static/intro.html').then((response) => {
          v.intro = response.body
        }, (response) => {
        })
      }
    },
    beforeDestroy() {
      bus.$emit('hide-demo')
    }
  }
</script>

<style>
.home {
  margin: 10px 0px;
}

.intro-text {
  text-align: left;
  font-size: 90%;
}

</style>
