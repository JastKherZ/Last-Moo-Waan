<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <footerr></footerr>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import footerr from './components/footer.vue';

export default {
  name: "App",
  components: {
    navbar,
    footerr,
}
};
</script>