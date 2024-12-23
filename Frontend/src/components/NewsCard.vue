<template>
  <div class="border border-gray-700 rounded-lg shadow-md p-4 bg-gray-800">
    <img :src="image" alt="News" class="w-full rounded-md mb-4" />
    <h3 class="text-xl font-semibold text-lime-500 mb-2">{{ title }}</h3>
    <p class="text-lime-500">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
})
</script>
