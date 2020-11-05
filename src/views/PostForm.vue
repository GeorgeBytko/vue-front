<template>
  <v-sheet class="px-10 ma-auto mt-5" max-width="800">
    <v-form @submit.prevent="addPost">
      <div class="text-center">
        <h3>Добавление поста</h3>
      </div>
      <div class="mt-3">
        <v-text-field
            v-model="userId"
            type="number"
            label="ID пользователя"
        >
        </v-text-field>
      </div>
      <div class="mt-1">
        <v-text-field
            v-model="title"
            label="Заголовок"
        >
        </v-text-field>
      </div>
      <div class="mt-1">
        <v-textarea
            v-model="body"
            label="Содержание"
        >
        </v-textarea>
      </div>
      <v-row no-gutters dense class="pa-2" justify="end">
        <v-btn
            :loading="isDataSent"
            :disabled="!isDataValid || isDataSent"
            color="success"
            class="mr-5 text--white"
            type="submit"
        >
          Добавить
        </v-btn>
        <v-btn
            :disabled="isDataSent"
            color="error"
            type="button"
            @click="clearForm"
        >
          Очистить
        </v-btn>
      </v-row>
      <div class="mt-2 text-center">
        <router-link :to="{name: 'Posts'}">Вернуться к постам</router-link>
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      title: '',
      body: '',
      userId: 1,
      isDataSent: false
    }
  },
  computed: {
    isDataValid() {
      return this.title && this.body && this.userId > 0
    }
  },
  methods: {
    addPost() {
      this.isDataSent = true
      this.$store.dispatch('addPost', {
        title: this.title,
        body: this.body,
        userId: this.userId
      })
      .then(() => this.$router.push({name: 'Posts'}))
      .finally(() => this.isDataSent = false)
    },
    clearForm() {
      this.title = ''
      this.body = ''
      this.userId = 1
    }
  }
}
</script>