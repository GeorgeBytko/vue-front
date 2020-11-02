<template>
  <div class="services__list-item">
    <div
        @click="viewPost"
        class="services__list-item-info"
    >
      <div class="services__list-item-heading">
        {{postData.title}}
      </div>
      <div class="services__list-item-body">
        {{postData.body}}
      </div>
    </div>
    <c-button
        @click="deletePost"
        variant="danger"
    >
      Удалить
    </c-button>
  </div>
</template>

<script>
import CButton from "@/components/c-button";
export default {
  name: "PostsListItem",
  components: {CButton,},
  props: {
    postData: {
      type: Object,
      required: true
    }
  },
  methods: {
    deletePost() {
      this.$store.dispatch('deletePost', this.postData)
    },
    viewPost() {
      this.$router.push({ name: 'PostView', params: { id: this.postData.id } })
    }
  }
};
</script>

<style lang="scss">
.services__list-item {
  padding: 15px;
  display: flex;
  align-items: center;
  &-info {
    flex-grow: 2;
    text-align: start;
    margin-right: 10px;
  }
  &-heading {
    color: rgba(41, 41, 41, 1);
    font-weight: bold;
    margin-bottom: 5px;
  }
  &-body {
    color: rgba(117, 117, 117, 1);
  }
  &-actions {
    height: 30px;
    cursor: pointer;
    border: 1px solid black;
    padding: 7px;
    border-radius: 7px;
    background-color: #f13d3d;
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
