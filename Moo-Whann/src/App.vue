<template>
  <div class="bg-blue-400 text-gray-100 py-3.5 px-6 shadow md:flex justify-between">
    <navbar />
  </div>
  <div>
    <login />
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import login from './components/login.vue';
export default {
  name: "App",
  components: {
    navbar,
    login,
  },
};
</script>