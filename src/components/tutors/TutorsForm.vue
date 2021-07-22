<template>
  <v-form
    @submit.prevent="submitForm"
    v-model="valid"
  >
    <v-container>
      <v-text-field
        v-model="firstName"
        type="text"
        :rules="nameRules"
        label="First name"
        required
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        type="text"
        :rules="nameRules"
        label="Last name"
        required
      ></v-text-field>

      <v-textarea
        v-model="description"
        type="text"
        :rules="descriptionRules"
        :counter="150"
        label="Description"
        required
      ></v-textarea>

      <v-text-field
        v-model="hourlyRate"
        type="number"
        label="Hourly Rate"
        required
      ></v-text-field>

      <v-checkbox
        v-model="areas"
        label="Frontend"
        value="frontend"
      ></v-checkbox>
      <v-checkbox
        v-model="areas"
        label="Backend"
        value="backend"
      ></v-checkbox>
      <v-checkbox
        v-model="areas"
        label="career"
        value="career"
      ></v-checkbox>
    </v-container>
    <v-btn
      color="primary"
      @click="submitForm"
    >
      <span class="btn-text">Submit</span>
    </v-btn>
  </v-form>
</template>

<script>

export default {
  name: 'TutorsForm',

  emits: ['save-data'],
  data () {
    return {
      valid: false,
      firstName: '',
      lastName: '',
      areas: [],
      nameRules: [
        v => !!v || 'Name is required'
      ],
      description: '',
      descriptionRules: [
        v => !!v || 'Description is required',
        v => (v.length > 10 && v.length < 250) || 'Description must be between 10 and 250 characters'
      ],
      hourlyRate: ''
    }
  },

  methods: {
    submitForm () {
      if (this.valid) {
        this.$emit('save-data', {
          firstName: this.firstName,
          lastName: this.lastName,
          description: this.description,
          areas: this.areas,
          hourlyRate: this.hourlyRate
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
