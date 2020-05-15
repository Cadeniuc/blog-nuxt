<template>
  <div class="page_edit_post">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item to="/admin/posts">Posts</el-breadcrumb-item>
      <el-breadcrumb-item>{{post.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <div :style="{height: '50px'}"></div>

    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
<!--      <h2>{{titleAdmin}}</h2>-->
      <el-form-item label="Text format .md or .html" prop="text">
        <el-input type="textarea" v-model.trim="controls.text" resize="none" :rows="10" />
      </el-form-item>
      <div>
        <small>
          <i class="el-icon-time"></i>
          <span style="margin-left: 5px">{{ new Date(post.date).toLocaleString() }}</span>
        </small>
        <small style="margin-left: 20px">
          <i class="el-icon-view"></i>
          <span style="margin-left: 5px">{{ post.views }}</span>
        </small>
      </div>
      <div :style="{height: '20px'}"></div>
      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        head() {
          return {
              title: 'Post | ' + this.post.title
          }
        },
        validate({params}) {
            return Boolean(params.id)
        },
        layout: 'admin',
        middleware: ['admin-auth'],
        async asyncData({store, params}) {
            const post = await store.dispatch('post/fetchAminById', params.id)
            return {post}
        },
        data() {
            return {
                titleAdmin: 'Login to admin',
                loading: false,
                controls: {
                    text: '',
                },
                rules: {
                    text: [
                        { required: true, message: 'Text error', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            onSubmit() {
                this.$refs.form.validate(async valid => {
                    if(valid) {
                        this.loading = true
                        const formData = {
                            text: this.controls.text,
                            id: this.post._id
                        }

                        try {
                            await this.$store.dispatch('post/update', formData)
                            this.$message.success('Post was edited')
                            this.loading = false
                        } catch (e) {
                            this.loading = false
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .page_edit_post {
    max-width: 800px;
  }
</style>
