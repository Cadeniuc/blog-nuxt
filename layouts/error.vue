<template>
  <div class="error_go">
    <div class="err_content">
      <h1 class="title_error_go">Error page</h1>
      <nuxt-link to="/">Back to home</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
  .error_go {
    padding-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
  }
  .title_error_go {
    color: red;
    margin-bottom: 20px;
    font-size: 50px;
  }
</style>
