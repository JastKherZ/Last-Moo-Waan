<template>
  <div class="text-gray-100 py-3.5 px-6 shadow md:flex justify-between" style="background: #7149C6;">
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