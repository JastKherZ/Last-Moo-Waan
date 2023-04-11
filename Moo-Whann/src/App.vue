<template>
  <div class="text-gray-100 py-3.5 px-6 shadow md:flex justify-between" style="background: #7149C6;">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import login from './views/login.vue';
import register from './views/register.vue';

export default {
  name: "App",
  components: {
    navbar,
    login,
    register
},
};
</script>