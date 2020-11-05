<template>
  <v-card
      class="mx-auto"
      max-width="900"
      flat
  >
    <v-alert color="error" v-if="error">При удалении произошла ошибка</v-alert>
    <v-card-title class="text-left">
      {{post.title}}
    </v-card-title>
    <v-card-text class="text-left">
      <p>{{post.body}}</p>
      <p class="text-left mt-2">UserID: {{post.userId}}</p>
    </v-card-text>
    <v-card-actions class="px-3">
      <v-btn
          :disabled="disabled"
          color="primary"
          :to="{name: 'PostView', params: { id: post.id }}"
      >
        Просмотр
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
          :loading="disabled"
          :disabled="disabled"
          @click.stop.prevent="deletePost(post)"
          color="error"
      >
        Удалить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PostsItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      disabled: false,
      error: null
    }
  },
  methods: {
    deletePost(post) {
      this.disabled = true
      this.$store.dispatch('deletePost', post)
        .catch((e) => this.error = e)

    }
  }
}
</script>