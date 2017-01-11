<template>
  <div class="home">
    <el-card class="news">
      <el-row>
        <!--<el-col :span="8" class="news-fig">
          <img src="static/1.png" v-show="count % 3 == 0"></img>
          <img src="static/2.png" v-show="count % 3 == 1"></img>
          <img src="static/3.png" v-show="count % 3 == 2"></img>
        </el-col>-->
        <el-col :span="16" :offset="2" class="news-text">
          <div v-for="year_news in news">
            <h3 v-text="year_news.year"></h3>
            <p v-for="news_item in year_news.news" v-text="news_item.content"></p>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
        news: [],
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
        this.$http.get('./static/news.json.txt').then((response) => {
          v.news = JSON.parse(response.body)
        }, (response) => {
        })
      }
    },
  }
</script>

<style>
.news {
  margin: 10px 0px;
}
.news-text {
  text-align: left;
}
</style>
