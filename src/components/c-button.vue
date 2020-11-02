<template>
  <button
      class="btn"
      :class="'btn_'+variant"
      v-bind="$attrs"
      v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "c-button",
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  },
}
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  min-height: 20px;
  border: 1px solid black;
  padding: 7px;
  border-radius: 7px;
  outline: none;
  width: auto;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.97);
  }
  &_primary {
    background-color: #4c30ff;
  }
  &_success {
    background-color: #42b983;
  }
  &_danger {
    background-color: #f13d3d;
  }
}
</style>