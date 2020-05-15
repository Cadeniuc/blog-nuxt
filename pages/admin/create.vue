<template>
  <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">

    <h1>Create new post</h1>

    <br>

    <el-form-item label="Title post" prop="text">
      <el-input type="text" v-model.trim="controls.title" />
    </el-form-item>

    <el-form-item label="Text format .md or .html" prop="text">
      <el-input type="textarea" v-model="controls.text" resize="none" :rows="10" />
    </el-form-item>

    <el-upload
      class="area_upload_file"
      :style="{width: '100%', 'max-width': '360px',}"
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
    </el-upload>

    <div class="buttons_footer_form flex_go flex_between">
      <div class="item_button_foot_g">
        <el-dialog title="Preview" :visible.sync="previewModal">
          <div :key="controls.text">
            <vue-markdown>{{controls.text}}</vue-markdown>
          </div>
        </el-dialog>
        <el-button type="success" plain @click="previewModal = true">Preview</el-button>
      </div>
      <div class="item_button_foot_g">
        <el-form-item class="no_mg_bottom">
          <el-button type="primary" round native-type="submit" :loading="loading">Create post</el-button>
        </el-form-item>
      </div>
    </div>

  </el-form>
</template>

<script>
    export default {
        layout: 'admin',
        middleware: ['admin-auth'],
        data() {
            return {
                image: null,
                previewModal: false,
                titleAdmin: 'Login to admin',
                loading: false,
                controls: {
                    title: '',
                    text: '',
                },
                rules: {
                    title: [
                        { required: true, message: 'Title post cant be empty', trigger: 'blur' },
                    ],
                    text: [
                        { required: true, message: 'Text error', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            handleImageChange(file) {
                this.image = file.raw
            },
            onSubmit() {
                this.$refs.form.validate(async valid => {
                    if(valid && this.image) {
                        this.loading = true

                        const formData = {
                            title: this.controls.title,
                            text: this.controls.text,
                            image: this.image
                        }

                        try {
                            await this.$store.dispatch('post/create', formData)
                            this.controls.text = ''
                            this.controls.title = ''
                            this.image = null
                            this.$refs.upload.clearFiles = null
                            this.$message.success('Post successfully created')
                            this.loading = false
                        }catch (e) {} finally {
                            this.loading = false
                        }
                    }else {
                        this.$message.warning('Form not valid')
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
  form {
    max-width: 800px;
  }
  .item_button_foot_g .el-button {
    width: 200px;
  }
  .area_upload_file {
    margin-bottom: 30px;
  }
</style>
