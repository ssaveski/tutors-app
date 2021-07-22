<template>
  <v-form @submit.prevent="submitForm" v-model="valid">
    <v-container>
      <v-textarea
          v-model="message"
          type="text"
          :rules="messageRules"
          :counter="150"
          label="Message"
          required
      ></v-textarea>

      <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
      ></v-text-field>
      <v-col class="text-right">
      <v-btn
          color="primary"
          @click="submitForm"
      >
        <span>Submit</span>
      </v-btn>
      </v-col>
    </v-container>
  </v-form>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'ContactTutor',

  data: () => ({
    valid: false,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    message: '',
    messageRules: [
      v => !!v || 'Message is required',
      v => (v.length > 10 && v.length < 250) || 'Message must be between 10 and 250 characters'
    ]
  }),

  computed: {

  },

  methods: {
    ...mapActions('requests', ['sendRequest']),

    submitForm () {
      if (!this.valid) {
        return
      }

      const data = {
        message: this.message,
        email: this.email,
        tutorId: this.$route.params.id
      }

      this.sendRequest(data)
    }
  }
}
</script>
<style scoped>
.btn-form {
  margin-left: 24px;
  margin-right: 24px;
  justify-content: flex-end;
}
</style>
