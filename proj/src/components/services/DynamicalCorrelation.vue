<template>
  <el-card class="serv1">
    <div slot="header" class="clearfix">
      <span>Dynamical Correlation</span>
    </div>
    <el-row>
      <el-col :span="24">
        <el-form ref="form" :model="form" label-width="250px">
          <el-form-item label="PDB file content">
            <el-input type="textarea" v-model="form.desc"></el-input>
            <input type="file" ref="pdb_file">
          </el-form-item>

          <el-form-item label="Number of CA atoms">
            <el-col :span="10">
              <el-input v-model="form.name"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="Number of frames">
            <el-col :span="10">
              <el-input v-model="form.name"></el-input>
            </el-col>
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
          name: '',
          region: 'option1',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          fileList: []
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
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

