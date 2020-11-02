<template>
  <div class="post-view">
    <div class="post-view-info">
      <router-link :to="{name: 'Posts'}">К постам</router-link>
      <Loader v-if="postDataLoading" />
      <template v-else>
        <h3 v-if="!isRedacting" class="post-view__title">{{postData.title}}</h3>
        <input v-else class="post-view__title" v-model="postData.title">
        <div v-if="!isRedacting" class="post-view__body">
          {{postData.body}}
        </div>
        <textarea  class="post-view__body" v-else v-model="postData.body">
        </textarea>
        <c-button @click="isRedacting = !isRedacting">Редактировать</c-button>
      </template>
    </div>
    <Comments :loading="commentsLoading" :items="comments"/>
  </div>
</template>

<script>
import Comments from "@/components/Comments";
import Loader from "@/components/Loader";
import CButton from "@/components/c-button";
export default {
  name: "PostView",
  components: {CButton, Loader, Comments},
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      comments: [],
      commentsLoading: true,
      postData: null,
      postDataLoading: true,
      error: null,
      isRedacting: false
    }
  },
  computed: {

  },
  created() {
    this.$axios
      .get(`posts/${this.id}`)
      .then(res => {
        this.postData = res.data
        this.postDataLoading = false
      })
      .catch(e => this.error = e)
    this.$axios
      .get(`posts/${this.id}/comments`)
      .then(res => {
        this.comments = res.data
        this.commentsLoading = false
      })
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.post-view {
  color: rgba(41, 41, 41, 1);
  width: 80%;
  margin: 10px auto;
  background-color: #e1eafa;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  &-info {
    min-height: 500px;
    background-color: #ffffff;
    text-align: start;
    display: flex;
    flex-direction: column;
  }
  &__title {
    margin-bottom: 10px;
    padding-left: 10px;
    font-weight: bold;
    font-size: 18px;
  }
  &__body {
    padding: 15px;
    font-size: 18px;
  }
}
</style>