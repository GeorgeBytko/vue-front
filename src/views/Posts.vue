<template>
  <div class="posts">
    <div class="posts__tools">
      <div class="posts__toolbar">
        <div class="posts__toolbar-back">
          На главную
        </div>
        <div class="posts__toolbar-title">
          Цены на диагностику
        </div>
        <router-link
            :to="{ name: 'PostForm' }"
            class="posts__toolbar-add">
          +
        </router-link>
      </div>
      <div class="posts__search">
        <input class="posts__search-input" type="text" />
      </div>
    </div>
    <PostsList />
  </div>
</template>

<script>
import PostsList from "@/components/PostsList";
export default {
  name: "Posts",
  components: { PostsList },
  data() {
    return {
      loading: true,
      error: false
    };
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  },

};
</script>
<style lang="scss">
.posts {
  width: 80%;
  margin: 10px auto;
  flex: 1;
  &__tools {
    background-color: #ffffff;
    padding: 10px;
  }
  &__toolbar {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    &-back {
    }
    &-add {
      text-decoration: none;
      color: black;
    }
  }
  &__search {
    margin-top: 20px;
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    &-input {
      width: 75%;
      height: 30px;
      padding: 10px;
    }
  }
}
</style>
