<template>
  <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">

    <h1>Create new post</h1>

    <br>

    <el-form-item label="Title post" prop="text">
      <el-input type="text" v-model.trim="controls.title" />
    </el-form-item>

    <el-form-item label="Text format .md or .html" prop="text">
      <el-input type="textarea" v-model.trim="controls.text" resize="none" :rows="10" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" round native-type="submit" :loading="loading">Create post</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        layout: 'admin',
        middleware: ['admin-auth'],
        data() {
            return {
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
            onSubmit() {
                this.$refs.form.validate(async valid => {
                    if(valid) {
                        this.loading = true

                        const formData = {
                            title: this.controls.title,
                            text: this.controls.text
                        }

                        try {
                            await this.$store.dispatch('post/create', formData)
                            this.controls.text = ''
                            this.controls.title = ''
                            this.$message.success('Post successfully created')
                            this.loading = false
                        }catch (e) {
                            console.log('error' + e)
                        } finally {
                            this.loading = false
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>
  form {
    max-width: 800px;
  }
</style>
