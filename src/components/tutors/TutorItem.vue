<template>
  <div class="tutor-item">
  <v-card
    elevation="2"
    outlined
    shaped
  >
    <v-card-title>{{ fullName }}</v-card-title>
    <v-card-subtitle>${{ rate }}/hour</v-card-subtitle>
    <v-card-text>
      <span>{{ areas }}</span>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        :to="coachContactLink"
      >
        <span class="btn-text">Contact</span>
        <v-icon
          right
          dark
        >
          mdi-human-greeting
        </v-icon>
      </v-btn>
      <v-btn
        color="accent"
        :to="coachDetailsLink"
      >
        <span class="btn-text">View Details</span>
        <v-icon
          right
          dark
        >
          mdi-card-account-details-outline
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
import { Tutor } from '../../classes/tutor'

export default {
  name: 'TutorItem',

  props: {
    tutor: {
      type: Tutor,
      required: true
    }
  },

  computed: {
    fullName () {
      return this.$props.tutor.firstName + ' ' + this.$props.tutor.lastName
    },

    rate () {
      return this.$props.tutor.hourlyRate
    },

    areas () {
      return this.$props.tutor.areas.map((i, index) => index === 0 ? i : ' ' + i).toString()
    },

    coachContactLink () {
      return this.$route.path + '/' + this.$props.tutor.id + '/contact'
    },

    coachDetailsLink () {
      return this.$route.path + '/' + this.$props.tutor.id
    }
  }
}
</script>

<style scoped>
.tutor-item {
  padding: 24px 0 24px 0;
}

@media only screen and (max-device-width: 768px) {
  .btn-text {
    display: none;
  }
}
</style>
