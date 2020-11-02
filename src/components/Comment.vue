<template>
  <div class="comments__item">
    <div class="comments__item-title">
      {{commentData.name}}
    </div>
    <div class="comments__item-body">
      {{commentData.body}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    commentData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.comments__item {
  margin-bottom: 10px;
  background-color: #ffffff;
  border: 1px solid black;
  padding: 10px;
  &-title {
    font-weight: bold;
    text-align: start;
    padding-left: 5px;
    margin-bottom: 5px;
  }
  &-body {
    padding-left: 10px;
    text-align: start;
  }
}
</style>