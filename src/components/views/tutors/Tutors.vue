<template>
  <content-layout>
    <template slot="title">Tutors</template>
    <template slot="filters">
      <v-btn
        color="primary"
        class="btn-filter"
        @click="fetchTutors()"
      >
        Refresh
        <v-icon
          right
          dark
        >
          mdi-refresh
        </v-icon>
      </v-btn>
      <v-btn
        color="accent"
        to="/register"
        class="btn-filter"
      >
        Register
        <v-icon
          right
          dark
        >
          mdi-account-plus-outline
        </v-icon>
      </v-btn>
    </template>
    <template slot="content">
      <v-progress-linear
        v-if="isLoading"
        color="primary"
        indeterminate
        reverse
      ></v-progress-linear>
      <ul
        v-else-if="hasTutors"
        class="tutors"
      >
        <tutor-item
          v-for="tutor in tutors"
          :key="tutor.id"
          :tutor="tutor"
        />
      </ul>
      <h3 v-else>No tutors</h3>
    </template>
  </content-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TutorItem from '../../tutors/TutorItem'
import ContentLayout from '../../layout/contentLayout/ContentLayout'

export default {
  name: 'Tutors',

  components: {
    ContentLayout,
    TutorItem
  },

  computed: {
    ...mapGetters('tutors', [
      'tutors',
      'hasTutors',
      'isLoading'
    ])
  },

  beforeMount () {
    this.fetchTutors()
  },

  methods: {
    ...mapActions('tutors', [
      'fetchTutors'
    ])
  }
}
</script>

<style scoped>
@media only screen and (min-device-width: 768px) {
  .tutors {
    width: 100%;
  }
}

.tutors {
  padding-left: 0;
}

.btn-filter {
  margin-right: 24px;
}
</style>
