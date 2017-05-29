<template>
  <div>
    <router-link :to="link.href" v-for="link in links" >
    <el-card class="card">
      <div slot="header" class="clearfix">
        <span v-text="link.title">Direct Coupling Analysis</span>
      </div>
      <p v-text="link.intro"></p>
    </el-card>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: []
    }
  },
  methods: {
    fetch_data() {
      var v = this
      v.$http.get('./static/services.json').then((response) => {
        v.links = response.body
        console.log(v.links)
      }, (response) => {
      })
    }
  },
  created() {
    this.fetch_data()
  }
}
</script>

<style scoped>
  .card {
    color: #2D292E;
    float: left;
    width: 250px;
    margin: 50px;
    height: 250px;
  }
</style>
