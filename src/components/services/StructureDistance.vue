<template>
  <div>
    <el-card class="serv1">
      <div slot="header" class="clearfix">
        <span>Structure Distance</span>
      </div>
      <el-row>
        <el-col :span="20">
          <el-form ref="form" :model="form">
            <el-form-item label="PDB file content">
              <el-input type="textarea" :rows="5" v-model="form.pdb"></el-input>
              <input type="file" ref="pdb_file">
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit" :disabled="!submitEnabled">Submit</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </el-form>
          <p>Click to show <a href="javascript:;" @click="get_example">example</a></p>

        </el-col>
      </el-row>

    </el-card>

    <el-card v-if="id">
      <div slot="header" class="clearfix">
        <span>Task Result</span>
      </div>
      <el-row v-if="result">
        <el-col :span="15">
          <p>Download: <a :href="'http://zhao.phy.ccnu.edu.cn:8122/server/result.php?download=txt&id=' + id" v-text="id+'.txt'"></a></p>
          <el-input type="textarea" :rows="25" v-model="result"></el-input>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        pdb: '',
        pdb_file: ''
      },
      result: '',
      id: '',
      submitEnabled: true
    }
  },

  methods: {
    get_example() {
      var v = this
      this.$http.get('http://zhao.phy.ccnu.edu.cn:8122/server/example.php?task=structure-distance').then((response) => {
        var r = response.body
        for (var i in r) {
          v.form[i] = r[i]
        }
      }, (response) => {
        console.log(response)
      })
    },

    get_result() {
      var v = this
      this.$http.get('http://zhao.phy.ccnu.edu.cn:8122/server/result.php?id=' + v.id).then((response) => {
        var result = response.body
        if (result !== '') {
          v.result = result
        } else {
          window.setTimeout(v.get_result, 500)
        }
      }, (response) => {
        console.log(response)
      })
    },

    onSubmit() {
      var v = this
      v.submitEnabled = false
      var formData = new window.FormData()
      formData.append('script', 'structure-distance')
      formData.append('pdb', v.form.pdb)
      formData.append('pdb_file', v.$refs.pdb_file.files[0])
      this.$http.post('http://zhao.phy.ccnu.edu.cn:8122/server/jntask.php', formData).then((response) => {
        console.log(response.body)
        v.id = response.body
        v.get_result()
        v.submitEnabled = true
      }, (response) => {
        console.log(response.body)
        v.submitEnabled = true
      })
    }
  }
}
</script>

<style>
.serv1 {
  margin: 10px 0px;
}
</style>

