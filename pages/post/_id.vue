<template>
  <div class="post_this">
    <div class="head_post">
      <div class="post_title">
        <h1>Title post</h1>
      </div>
      <div class="info_article">
        <small class="date_post"><i class="el-icon-time"></i> {{ new Date().toLocaleString() }}</small>
        <small class="views_article">
          <i class="el-icon-view"></i> 15
        </small>
      </div>
    </div>
    <div class="image_post_g">
      <el-image src="https://images.unsplash.com/photo-1585681614545-cd8c7b9d92b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="" class="image_item_news"></el-image>
    </div>
    <div class="main_article_post">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur consectetur dolorem dolorum ea, eligendi est expedita facilis id illo iusto nam nemo nesciunt nulla officiis provident quasi, velit voluptas.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur consectetur dolorem dolorum ea, eligendi est expedita facilis id illo iusto nam nemo nesciunt nulla officiis provident quasi, velit voluptas.</p>
    </div>

    <div class="footer_post">

      <app-comment-form v-if="canAddComment" @created="createCommentHandler" />

      <div class="comments_go" v-if="true">
        <app-comment v-for="comment in 4" :key="comment" :comment="comment">

        </app-comment>
      </div>
      <div class="text-center comments_not" v-else>Comments not have(</div>
    </div>
  </div>
</template>

<script>
  import AppComment from '~/components/main/Comment'
  import AppCommentForm from '~/components/main/CommentForm'

  export default {
      validate({params}) {
          return Boolean(params.id)
      },
      data() {
        return {
            canAddComment: true
        }
      },
      methods: {
          createCommentHandler() {
              this.canAddComment = false
          }
      },
      components: {AppComment,AppCommentForm}
  }
</script>

<style lang="scss" scoped>
  .info_article {
    justify-content: center;
    justify-content: space-between;
  }
  .info_article,
  .post_title {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .post_this {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .image_post_g {
    margin-bottom: 20px;
  }
  .main_article_post p {
    font-weight: 300;
    margin-bottom: 20px;
    font-family: monospace;
  }
</style>
