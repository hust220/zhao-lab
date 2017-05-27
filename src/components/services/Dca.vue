<template>
  <el-card class="serv1">
    <div slot="header" class="clearfix">
      <span>DCA</span>
    </div>
    <el-row>
      <el-col :span="24">
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="MSA">
            <el-input type="textarea" v-model="form.msa"></el-input>
            <input type="file" ref="msa_file">
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row v-if="result">
      <el-col :span="15"><el-input style="margin-left:150px" type="textarea" :rows="25" v-model="result"></el-input></el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        msa: '',
        msa_file: '',
      },
      id: '',
      result: ''
    }
  },

  methods: {
    get_result() {
      var v = this
      this.$http.get('/result.php?id=' + v.id).then((response) => {
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
      var formData = new window.FormData()
      formData.append('script', 'DCA')
      formData.append('msa', v.form.msa)
      formData.append('msa_file', v.$refs.msa_file.files[0])
      this.$http.post('/jntask.php', formData).then((response) => {
        console.log(response.body)
        v.id = response.body
        v.get_result()
      }, (response) => {
        console.log(response.body)
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

