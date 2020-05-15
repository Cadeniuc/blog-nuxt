<template>
  <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
    <h1>Add comment</h1>
    <el-form-item label="Name" prop="name">
      <el-input v-model.trim="controls.name" />
    </el-form-item>

    <el-form-item label="Your comment" prop="text">
      <el-input type="textarea" :rows="2" v-model="controls.text  " />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" round native-type="submit" :loading="loading">Add comment</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
  export default {
    data() {
        return {
            loading: false,
            controls: {
                name: '',
                text: ''
            },
            rules: {
                name: [
                    { required: true, message: 'Name cant be empty', trigger: 'blur' },
                ],
                text: [
                    { required: true, message: 'Name cant be empty', trigger: 'blur' },
                ],
            }
        }
    },
      methods: {
          onSubmit() {
              this.$refs.form.validate((valid) => {
                  if (valid) {
                      this.loading = true

                      const formDate = {
                          name: this.controls.name,
                          text: this.controls.text,
                          postId: ''
                      }

                      try {
                          setTimeout(() => {
                              this.$message.success('Comment was added')
                              this.$emit('created')
                          },1000)
                      }catch (e) {
                          console.log(e)
                          this.loading = false
                      }
                  }
              });
          }
      }
  }
</script>

<style lang="scss" scoped>

</style>
