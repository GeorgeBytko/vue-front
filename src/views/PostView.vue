<template>
  <div class="post-view">
    <div class="post-view-info">
      <router-link :to="{name: 'Posts'}">К постам</router-link>
      <Loader v-if="postDataLoading" />
      <template v-else>
        <h1 v-if="!isRedacting" class="post-view__title">{{postData.title}}</h1>
        <textarea v-else class="post-view__title" v-model="postData.title"> </textarea>
        <div v-if="!isRedacting" class="post-view__body">
          {{postData.body}}
        </div>
        <textarea  class="post-view__body" v-else v-model="postData.body">
        </textarea>
      </template>
    </div>
    <div class="post-view__btns">
      <c-button class="post-view__btns-item" @click="isRedacting = !isRedacting">Редактировать</c-button>
      <c-button variant="success" @click="changePost">ОК</c-button>
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
      isRedacting: false
    }
  },
  computed: {

  },
  methods: {
    changePost() {
      this.$store.dispatch('changePost', this.postData)
        .then(() => this.$router.push({name: 'Posts'}))
        .catch(e => console.log(e))
    }
  },
  created() {
    this.$axios
      .get(`posts/${this.id}`)
      .then(res => {
        this.postData = res.data
        this.postDataLoading = false
      })
      .catch(e => console.log(e))
    this.$axios
      .get(`posts/${this.id}/comments`)
      .then(res => {
        this.comments = res.data
        this.commentsLoading = false
      })
      .catch(e => console.log(e))
  },
}
</script>

<style lang="scss">
.post-view {
  color: rgba(41, 41, 41, 1);
  width: 80%;
  margin: 10px auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  &-info {
    margin: 0 auto;
    min-height: 400px;
    background-color: #ffffff;
    text-align: start;
    display: flex;
    flex-direction: column;
    width: 600px;
  }
  &__btns {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  &__title {
    margin-bottom: 10px;
    padding-left: 10px;
    font-weight: bold;
    font-size: 40px;
    min-height: 70px;
  }
  &__body {
    min-height: 100px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    letter-spacing: normal;
    word-spacing: normal;
    padding-left: 15px;
    font-size: 21px;
    resize: vertical;
  }
}
</style>