<template>
  <div class="tutor-item">
  <v-card
    elevation="2"
    outlined
    shaped
  >
    <v-card-title>
      <a :href="emailLink">{{ email }}</a>
    </v-card-title>
    <v-card-text>{{ message }}</v-card-text>
  </v-card>
  </div>
</template>

<script>
import { Request } from '../../classes/request'

export default {
  name: 'RequestItem',

  props: {
    request: {
      type: Request,
      required: true
    }
  },

  computed: {
    emailLink () {
      return 'mailto: ' + this.email
    },

    email () {
      return this.$props.request.email
    },

    message () {
      return this.$props.request.message
    }
  }
}
</script>

<style scoped>
.request-item {
  padding: 24px 0 24px 0;
}
</style>
