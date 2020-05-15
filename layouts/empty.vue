<template>
  <div class="empty_layout_go">
    <nuxt />
  </div>
</template>

<script>
  export default {
      computed: {
          error() {
              return this.$store.getters.error
          }
      },
      watch: {
          error(value) {
              this.$message.error(value)
          }
      }
  }
</script>

<style scoped>
  .empty_layout_go {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 5%;
  }
</style>
