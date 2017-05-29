<template>
  <div>
  <el-card class="serv1">
    <div slot="header" class="clearfix">
      <span>Direct Coupling Analysis</span>
    </div>
    <el-row>
      <el-col :span="24">
        <el-form ref="form" label-position="top" :model="form" label-width="150px">
          <el-form-item label="MSA File">
            <el-input type="textarea" v-model="form.msa"></el-input>
            <input type="file" ref="msa_file">
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit" :disabled="!submitEnabled">Submit</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
  <el-card v-if="id">
    <div slot="header" class="clearfix">
      <span>Task Result</span>
    </div>
    <el-row v-if="result">
      <el-col :span="15">
        Download: <a :href="'http://zhao.phy.ccnu.edu.cn:8122/server/result.php?download=&id=' + id" v-text="id+'.txt'"></a>
        <el-input style="margin-left:150px" type="textarea" :rows="25" v-model="result"></el-input>
      </el-col>
    </el-row>
  </el-card>
  </div>
</template>

<script>
function isStrEmpty(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '').length === 0
}

export default {
  data() {
    return {
      form: {
        msa: '',
        msa_file: '',
      },
      id: '',
      result: '',
      submitEnabled: true
    }
  },

  methods: {
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
      v.id = ''
      v.submitEnabled = false
      var formData = new window.FormData()
      formData.append('script', 'DCA')
      if (!isStrEmpty(v.form.msa)) {
        formData.append('msa', v.form.msa)
      }
      formData.append('msa_file', v.$refs.msa_file.files[0])
      this.$http.post('http://zhao.phy.ccnu.edu.cn:8122/server/jntask.php', formData).then((response) => {
        console.log(response.body)
        v.id = response.body
        v.get_result()
        v.submitEnabled = true
      }, (response) => {
        console.log(response.body)
        v.submitEnabled = true
      })
    },

    handleSuccess(response, file, fileList) {
      this.form.fileList.push(file.name)
      console.log(this.form.fileList)
    }
  }
}

</script>

<style>
.serv1 {
  margin: 10px 0px;
}
</style>

