<template>
<content-layout>
  <template #title>Requests Received</template>
  <template #content>
    <div v-if="hasRequests">
      <request-item
        v-for="(request, index) in requests"
        :request="request"
        :key="index"
      />
    </div>
    <h3 v-else>You haven't received any requests yet!</h3>
  </template>
</content-layout>
</template>

<script>
import ContentLayout from '../../layout/contentLayout/ContentLayout'
import { mapGetters } from 'vuex'
import RequestItem from '../../requests/RequestItem'

export default {
  name: 'Requests',
  components: {
    RequestItem,
    ContentLayout
  },

  computed: {
    ...mapGetters('requests', [
      'requests',
      'hasRequests'
    ])
  }
}
</script>

<style scoped>

</style>
