<template>
  <div class="home">
    <el-card class="news">
      <el-row>
        <el-col :span="8" class="news-fig">
          <img src="static/1.png" v-show="count % 3 == 0"></img>
          <img src="static/2.png" v-show="count % 3 == 1"></img>
          <img src="static/3.png" v-show="count % 3 == 2"></img>
        </el-col>
        <el-col :span="16" class="news-text">
          <ul>
            <li v-for="item in news"><a :href="item.link" v-text="item.text"></a></li>
          </ul>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="intro">
      <el-row>
        <el-col :span="24">
          <div v-html="intro"></div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0,
        news: [],
        intro: 'Introduction'
      }
    },
    created () {
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
        this.$http.get('static/news.json').then((response) => {
          console.log(response)
          v.news = response.body
        }, (response) => {
        })
        this.$http.get('static/intro.html').then((response) => {
          console.log(response)
          v.intro = response.body
        }, (response) => {
        })
      }
    }
  }
</script>

<style>
.news {
  margin-bottom: 10px;
}
.news-text {
  text-align: left;
}

</style>