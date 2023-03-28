<template>
  <div class="bg-blue-400 text-gray-100 py-3.5 px-6 shadow md:flex justify-between">
    <navbar />
  </div>
</template>

<script>
import { createApp } from 'vue';
import navbar from './components/navbar.vue';
export default {
  name: "App",
  components: {
    navbar,
  },
};
</script>