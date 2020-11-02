<template>
  <div class="posts__list">
    <div class="posts__list-heading">
      <h2>Записи</h2>
    </div>
    <Loader v-if="loading" />
    <template v-else>
      <PostsListItem v-for="post in posts.slice(0,10)" :post-data="post" :key="post.id"/>
    </template>
  </div>
</template>

<script>
import PostsListItem from "@/components/PostsListItem";
import Loader from "@/components/Loader";
export default {
  name: "PostsList",
  components: {Loader, PostsListItem },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  },
  created() {
    if (!this.posts.length) {
      this.$store
          .dispatch("getPosts")
          .then(() => (this.loading = false))
          .catch(() => (this.error = true));
    }
    else {
      this.loading = false
    }

  }
};
</script>

<style lang="scss">
.posts__list {
  margin: 0 auto;
  max-width: 740px;
  background-color: #ffffff;
  &-heading {
    margin-top: 20px;
    text-align: start;
    padding-left: 10px;
    border-bottom: 1px solid rgba(204, 204, 204, 1);
    padding-bottom: 8px;
  }
}
</style>
