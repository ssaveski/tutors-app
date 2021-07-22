<template>
 <content-layout>
   <template #title>Register as a tutor now!</template>
   <template #content>
      <tutors-form @save-data="saveData"></tutors-form>
   </template>
 </content-layout>
</template>

<script>

import ContentLayout from '../../layout/contentLayout/ContentLayout'
import TutorsForm from '../../tutors/TutorsForm'
import { mapActions } from 'vuex'

export default {
  name: 'TutorRegistration',
  components: {
    TutorsForm,
    ContentLayout
  },

  methods: {
    ...mapActions('tutors', ['registerTutor']),

    saveData (data) {
      this.registerTutor(data)
      this.$router.replace('/tutors')
    }
  }
}
</script>

<style scoped>

</style>
