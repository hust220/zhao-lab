<template>
  <div class="demo">
    <table>
      <tr>
        <td>
          <img :src="'static/'+top.logo" />
        </td>
        <td>
          <span class="top-title">{{top.title}}</span><br><span class="top-intro">{{top.intro}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        top: []
      }
    },
    created() {
      this.fetch_data()
    },
    watch: {
      '$route': 'fetch_data'
    },
    methods: {
      fetch_data() {
        var v = this
        this.$http.get('static/top.json').then((response) => {
          v.top = response.body
        }, (response) => {
        })
      }
    }
  }
</script>

<style>
.demo {
  text-align: left;
  height: 50px;
  padding: 10px 0px;
}
.demo img {
  height: 50px;
}
.top-title {
    font-size: 110%;
}
.top-intro {
    font-size: 80%;
}
</style>