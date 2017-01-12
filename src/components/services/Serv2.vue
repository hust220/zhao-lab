<template>
  <el-card class="serv2">
    <div slot="header" class="clearfix">
      <span>New Serv2 Task</span>
    </div>
    <el-row>
      <el-col :span="24">
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="Input1">
            <el-col :span="5">
              <el-input v-model="form.name"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="Select">
            <el-select v-model="form.region" placeholder="Please select">
              <el-option label="Option1" value="option1"></el-option>
              <el-option label="Option2" value="option2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Switch">
            <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="Checkbox">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="checkbox1" name="type"></el-checkbox>
              <el-checkbox label="checkbox2" name="type"></el-checkbox>
              <el-checkbox label="checkbox3" name="type"></el-checkbox>
              <el-checkbox label="checkbox4" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Radio">
            <el-radio-group v-model="form.resource">
              <el-radio label="radio1"></el-radio>
              <el-radio label="radio2"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Textarea">
            <el-input type="textarea" v-model="form.desc"></el-input>
            <el-upload
              action="//jsonplaceholder.typicode.com/posts/"
              :on-success="handleSuccess">
              <el-button size="small" type="primary">Upload</el-button>
              <div class="el-upload__tip" slot="tip">Upload the file</div>
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
  .serv2 {
    margin: 10px 0px;
  }
</style>


