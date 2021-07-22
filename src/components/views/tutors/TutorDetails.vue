<template>
  <content-layout>
    <template #title>Tutor Details</template>
    <template #content>
      <div class="item">
      <v-card>
          <v-card-title>{{ fullName }}</v-card-title>
          <v-card-text>${{ rate }}/rate</v-card-text>
      </v-card>
      </div>
      <div class="item">
      <v-card>
        <v-card-title>Interested? Reach out now</v-card-title>
        <v-card-subtitle>
          <v-btn
            color="primary"
            :to="coachContactLink"
            class="btn-contact"
          >
            <span class="btn-text">Contact</span>
            <v-icon
              right
              dark
            >
              mdi-human-greeting
            </v-icon>
          </v-btn>
        </v-card-subtitle>
        <router-view></router-view>
        <v-card-actions>
        </v-card-actions>
      </v-card>
      </div>
      <div class="item">
      <v-card>
        <v-card-title>
          <v-chip
            v-for="(area, index) in areas"
            :key="index"
            :color="area.color"
            class="area"
          >
            {{ area.text }}
          </v-chip>
        </v-card-title>
        <v-card-text>
          {{ description }}
        </v-card-text>
      </v-card>
      </div>
    </template>
  </content-layout>
</template>

<script>

import ContentLayout from '../../layout/contentLayout/ContentLayout'
import { mapGetters } from 'vuex'

const colors = {
  1: 'success',
  2: 'info',
  3: 'warning'
}
export default {
  name: 'TutorDetails',
  props: ['id'],

  components: {
    ContentLayout
  },

  data () {
    return {
      selectedCoach: null
    }
  },

  computed: {
    ...mapGetters('tutors', [
      'tutors'
    ]),

    selectedTutor () {
      return this.tutors.find(t => t.id === this.id)
    },

    fullName () {
      return this.selectedTutor.firstName + ' ' + this.selectedTutor.lastName
    },

    description () {
      return this.selectedTutor.description
    },

    rate () {
      return this.selectedTutor.hourlyRate
    },

    areas () {
      return this.selectedTutor.areas.map((i, index) => {
        return {
          color: colors[this.getRandomInt()],
          text: i
        }
      })
    },

    coachContactLink () {
      return this.$route.path + '/contact'
    }
  },

  methods: {
    getRandomInt () {
      return Math.ceil(Math.random() * 3)
    }
  }
}
</script>

<style scoped>
 .item {
   padding: 24px
 }

 .area {
   margin-right: 12px;
 }

 .btn-contact {
   margin-top: 24px;
 }
</style>
