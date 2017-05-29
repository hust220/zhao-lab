<template>
  <el-card class="research">
    <el-row>
      <el-col :span="22" :offset="1">
        <div v-html="research"></div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        research: 'research'
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
        this.$http.get('static/research.html').then((response) => {
          // console.log(response)
          v.research = response.body
        }, (response) => {
        })
      }
    }
  }
</script>

<style>
.research {
  margin: 10px 0px;
  text-align: left;
}

</style>