<template>
  <el-card shadow="always" :style="{width: '500px'}">
    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
      <h2>{{titleAdmin}}</h2>
      <el-form-item label="Login" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model.trim="controls.password" type="password" />
      </el-form-item>
      <div :style="{height: '10px'}"></div>
      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading">Login</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
    layout: 'empty',
    data() {
        return {
            titleAdmin: 'Login to admin',
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

                        await this.$store.dispatch('auth/login', formData)
                        this.$router.push('/admin')

                    } catch (e) {
                        this.loading = false
                    }
                }
            })
        }
    },
    mounted() {
        const {message} = this.$route.query

        switch(message) {
            case 'login':
                this.$message.info('For start log in to system')
                break
            case 'logout':
                this.$message.success('You are logout like now)')
                break
        }
    }
}
</script>
