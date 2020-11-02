<template>
  <div class="comments">
    <h3 class="comments__title">Комментарии</h3>
    <Loader v-if="loading">
    </Loader>
    <div class="comments__list" v-else>
      <Comment v-for="comment in items" :key="comment.id" :comment-data="comment"/>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/Comment";
import Loader from "@/components/Loader";
export default {
  name: "Comments",
  components: {Loader, Comment},
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.comments {
  &__title {
    text-align: start;
  }
  &__list {
    padding: 10px;
  }
}
</style>