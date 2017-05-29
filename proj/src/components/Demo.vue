<template>
  <div class="demo">
    <img src="static/demo1.jpg" v-show="count % 3 == 0">
    <img src="static/demo2.jpg" v-show="count % 3 == 1">
    <img src="static/demo3.jpg" v-show="count % 3 == 2">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
        // top: []
      }
    },
    created() {
      this.fetch_data()
      var v = this
      window.setInterval(function () {
        v.count += 1
      }, 5000)
    },
    watch: {
      '$route': 'fetch_data'
    },
    methods: {
      fetch_data() {
        var v = this
        // this.$http.get('static/top.json').then((response) => {
        //   v.top = response.body
        // }, (response) => {
        // })
      }
    }
  }
</script>

<style>
.demo {
  text-align: left;
  height: 320px;
  overflow: hidden;
}
.demo img {
  width: 100%;
  margin-top: -345px;
  /*height: 320px;*/
}
.top-title {
    font-size: 110%;
}
.top-intro {
    font-size: 80%;
}
</style>
