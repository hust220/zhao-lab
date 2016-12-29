<template>
  <el-card>
    <el-row>
      <el-col :span="24">
        <ol>
            <li v-for="ref in refs">
                {{ref.Authors[0]}}. etc. ({{ref.Year}})
                <a :href="'static/'+ref.Pdf">{{ref.Title}}</a>. {{ref.Journal}}.
                {{ref.Volume}}. {{ref.Pages}}
            </li>
        </ol>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    data () {
      return {
        refs: []
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
        this.$http.get('static/pubs.json').then((response) => {
          v.refs = response.body
        }, (response) => {
        })
      }
    }

  }
</script>