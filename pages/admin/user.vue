<template>
  <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit" :style="{'max-width': '600px'}">
    <h2>{{titleAdmin}}</h2>
    <el-form-item label="Login" prop="login">
      <el-input v-model.trim="controls.login" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model.trim="controls.password" type="password" />
    </el-form-item>
    <div :style="{height: '10px'}"></div>
    <el-form-item>
      <el-button type="primary" round native-type="submit" :loading="loading">Create</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        layout: 'admin',
        middleware: ['admin-auth'],
        data() {
            return {
                titleAdmin: 'Create user',
                loading: false,
                controls: {
                    login: '',
                    password: ''
                },
                rules: {
                    login: [
                        { required: true, message: 'Login error', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: 'Password error', trigger: 'blur' },
                        {min:6, message: "Password can't be less 6 letter"}
                    ],
                }
            }
        },
        methods: {
            onSubmit() {
                this.$refs.form.validate(async valid => {
                    if(valid) {
                        this.loading = true
                        try {
                            const formData = {
                                login: this.controls.login,
                                password: this.controls.password,
                            }
                            await this.$store.dispatch('auth/createUser', formData)
                            this.$message.success('New user was added')
                            this.controls.login = ''
                            this.controls.password = ''
                            this.loading = false
                        } catch (e) {
                            this.loading = false
                        }
                    }
                })
            }
        },
    }
</script>
