<template>
  <div class="admin_cont_go">
    <el-container :style="{height: '100%'}">
      <el-aside width="250px">
        <app-aside />
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import AppAside from '~/components/admin/Aside'
    export default {
      components: {AppAside}
    }
</script>
<style scoped>
  .admin_cont_go {
    width: 100%;
    height: 100vh;
  }
</style>
