<template>
  <v-card flat>
    <div class="text-left pl-3">
      <router-link :to="{name: 'Posts'}">К постам</router-link>
    </div>
    <v-alert color="error" v-if="error" class="mt-3">
      При при загрузке произошла ошибка
    </v-alert>
    <template v-else>
      <div class="mb-3">
        <template v-if="!postDataLoading && postData">
          <v-card-title class="text-left">
            <div v-if="!isRedacting" class="text-area-style post-view__title">{{postData.title}}</div>
            <v-textarea
                v-else
                class="post-view__title"
                v-model="postData.title"
                style="padding: 0"
            >
            </v-textarea>
          </v-card-title>
          <v-card-text class="text--primary text-left">
            <div v-if="!isRedacting" class="post-view__body text-area-style">
              {{postData.body}}
            </div>
            <v-textarea
                v-else
                class="post-view__body"
                v-model="postData.body"
            >
            </v-textarea>
          </v-card-text>
          <v-row dense no-gutters justify="space-around">
            <v-btn
                :disabled="isDataSent"
                color="primary"
                @click="isRedacting = !isRedacting"
            >
              Редактировать
            </v-btn>
            <v-btn
                color="success"
                :disabled="!isRedacting || isDataSent"
                :loading="isDataSent"
                @click="changePost"
            >
              ОК
            </v-btn>
          </v-row>
        </template>
        <div v-else class="mt-3 text-center">
          <v-progress-circular
              indeterminate
              color="primary"
              size="70"
          >
          </v-progress-circular>
        </div>
      </div>
      <Comments :loading="commentsLoading" :items="comments"/>
    </template>

  </v-card>
</template>

<script>
import Comments from "@/components/Comments";
export default {
  name: "PostView",
  components: {  Comments},
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
      isRedacting: false,
      error: false,
      isDataSent: false
    }
  },
  methods: {
    changePost() {
      this.isDataSent = true
      this.$store.dispatch('changePost', this.postData)
        .then(() => this.$router.push({name: 'Posts'}))
        .catch(e => console.log(e))
        .finally(() => this.isDataSent = true)
    }
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
      .catch(e => this.error = e)
  },
}
</script>

<style lang="scss">
.text-area-style {
  min-height: 166px;
  line-height: 1.75rem;
}

.post-view {

  &__title {
    white-space: pre-wrap;
    overflow-wrap: break-word;
    letter-spacing: normal;
    word-spacing: normal;
    padding-top: 10px;
    font-weight: bold;
    font-size: 40px;
    line-height: 0;

  }

  &__body {
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