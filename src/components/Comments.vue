<template>
  <v-card flat >
    <v-card-title>
      <h3>Комментарии</h3>
    </v-card-title>
    <v-divider></v-divider>
    <div class="mt-3 text-center" v-if="loading">
      <v-progress-circular
          indeterminate
          color="primary"
          size="70"
      ></v-progress-circular>
    </div>
    <v-container class="pl-5" v-else>
      <v-card
          flat
          v-for="comment in items"
          :key="comment.id"
          class="text-left"
      >
        <v-card-title>
          <h4>
            {{comment.name}}
          </h4>
        </v-card-title>
        <v-card-text class="text--primary pl-10">
          {{comment.body}}
        </v-card-text>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Comments",
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