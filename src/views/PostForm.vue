<template>
  <form @submit.prevent="addPost" class="post-form">
    <h3>Добавление поста</h3>
    <div class="post-form__item">
      <label for="add-post-user" class="post-form__item-label">
        ID пользователя
      </label>
      <input
          v-model="userId"
          type="number"
          id="add-post-user"
          class="post-form__item-input">
    </div>
    <div class="post-form__item">
      <label for="add-post-title" class="post-form__item-label">
        Заголовок
      </label>
      <input
          v-model="title"
          id="add-post-title" class="post-form__item-input">
    </div>
    <div class="post-form__item">
      <label for="add-post-body" class="post-form__item-label">
        Содержание
      </label>
      <textarea
          v-model="body"
          class="post-form__item-textarea"
          id="add-post-body"></textarea>
    </div>

    <div class="post-form__btns">
      <c-button variant="success" type="submit">Добавить</c-button>
      <c-button variant="danger" type="button" @click="clearForm">Очистить</c-button>
    </div>
    <router-link :to="{name: 'Posts'}">Вернуться к постам</router-link>
  </form>
</template>

<script>
import CButton from "@/components/c-button";
export default {
  name: "PostForm",
  components: {CButton},
  data() {
    return {
      title: '',
      body: '',
      userId: 1
    }
  },
  computed: {

  },
  methods: {
    addPost() {
      this.$store.dispatch('addPost', {
        title: this.title,
        body: this.body,
        userId: this.userId
      })
      .then(() => this.$router.push({name: 'Posts'}))
    },
    clearForm() {
      this.title = ''
      this.body = ''
      this.userId = 1
    }
  }
}
</script>

<style lang="scss">
.post-form {
  color: rgba(41, 41, 41, 1);;
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: #ffffff;
  margin: 10% auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px #a59a9a;
  &__btns {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  &__item {
    margin-bottom: 15px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    &-label {
      margin-right: 5px;
    }
    &-textarea {
      width: 400px;
      resize: vertical;
    }
  }
}
</style>