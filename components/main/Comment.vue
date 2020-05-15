<template>
  <el-card class="comment_go">
    <div class="commnets_head_go">
      <span class="name_comm">Person name</span>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </div>
    <div class="comment_text_go">
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </el-card>
</template>


<script>
  export  default {
      props: ['comment']
  }
</script>

<style lang="scss" scoped>
  .comment_go {
    margin-bottom: 30px;
  }
  .commnets_head_go {
    display: flex;
    justify-content: space-between;
    margin-bottom: 13px;
    font-size: 17px;
  }
  .comment_text_go {
    white-space: pre-line;
  }
</style>
