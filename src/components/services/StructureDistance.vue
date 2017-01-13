<template>
  <el-card class="serv1">
    <div slot="header" class="clearfix">
      <span>Structure Distance</span>
    </div>
    <el-row>
      <el-col :span="20">
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="PDB file content">
            <el-input type="textarea" :rows="5" v-model="form.pdb"></el-input>
            <el-upload
              action="//jsonplaceholder.typicode.com/posts/"
              :on-success="handleSuccess">
              <el-button size="small" type="primary">Upload</el-button>
              <div class="el-upload__tip" slot="tip">Upload the pdb file</div>
            </el-upload>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>

      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          pdb: '',
          fileList: []
        },
        result: '',
        id: ''
      }
    },
    methods: {
      get_result() {
        var v = this
        this.$http.get('./result.php?id=' + v.id).then((response) => {
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
        this.$http.post('./jntask.php', {script: 'structure-distance', pdb: v.form.pdb}).then((response) => {
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

