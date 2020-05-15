<template>
  <el-card
    shadow="hover"
    :body-style="{padding:0}"
    class="post_blog"
  >
    <header slot="header" class="header_post">
      <h2>Post title</h2>

      <small><i class="el-icon-time"></i> {{ new Date().toLocaleString() }}</small>
    </header>
    <div class="post_body_go">
      <el-image src="https://images.unsplash.com/photo-1585681614545-cd8c7b9d92b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
                class="image_item_news"
      ></el-image>
    </div>

    <div class="footer_news">
      <el-button round @click="openPost">Read more</el-button>
      <span class="comments_right">
        <i class="el-icon-message"></i> 80
      </span>
    </div>

  </el-card>
</template>


<script>
  export default  {
    methods: {
        openPost() {
            const id = 'test-id'
            this.$router.push('/post/' + id)
        }
    }
  }
</script>

<style lang="scss" scoped>
  .post_blog {
    margin-bottom: 30px;
  }
  .header_post {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer_news {
    padding: 15px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .comments_right {
    font-size: 17px;
  }
</style>
