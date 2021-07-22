<template>
  <div class="layout">
    <h4
      v-if="hasSlot('title')"
      class="title"
    >
      <slot name="title"/>
    </h4>
    <div
      v-if="hasSlot('filters')"
      class="filters"
    >
      <slot name="filters"/>
    </div>
    <div
      v-if="hasSlot('content')"
      class="content"
    >
      <slot name="content"/>
    </div>
  </div>
</template>

<script>

import { hasSlot } from '../../../utils/hasSlot'

export default {
  name: 'ContentLayout.vue',

  methods: {
    hasSlot
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.title {
  padding: 24px;
  border-bottom: 1px solid #e6e5e6;
}

.content {
  padding: 24px;
}

.filters {
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-start;
  background-color: white;
  padding: 24px;
  border-bottom: 1px solid #e6e5e6;
}
</style>
