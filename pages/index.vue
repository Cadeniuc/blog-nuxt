<template>
  <el-row type="flex" justify="center">
    <el-col :xs="25" :sm="18" :md="12" :lg="10">
      <app-post-go
      v-for="post in 3"
      :key="post"
      />
    </el-col>
  </el-row>
</template>

<script>
  import AppPostGo from '~/components/main/Post'
  export default {
      head: {
        title: 'Home page'
      },
      components: {
          AppPostGo
      }
  }
</script>
