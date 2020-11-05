<template>
  <v-sheet>
    <v-btn
        class="mx-2 posts__add-btn"
        fab
        color="success"
        fixed
        :to="{name: 'PostForm'}"
    >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-sheet>
      <div class="text-center" v-if="loading">
        <v-progress-circular
            indeterminate
            color="primary"
            size="70"
        ></v-progress-circular>
      </div>
      <v-row dense v-else>
        <v-col
            v-for="(post) in posts.slice(0,15)"
            :key="post.id"
            cols="12"
            class="mb-5"
        >
          <PostsItem :post="post" />
        </v-col>
      </v-row>
    </v-sheet>

  </v-sheet>
</template>

<script>
import PostsItem from "@/components/PostsItem";
export default {
  name: "Posts",
  components: {PostsItem },
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
<style>
.posts__add-btn {
  position: fixed;
  bottom: 50px;
  right: 20px;
}
</style>