<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar }
}
</script>

<style>
/* الوضع العادي */
body {
  background-color: #fff;
  color: #000;
  margin: 0;
  font-family: system-ui, sans-serif;
}

/* الوضع الليلي */
.dark body {
  background-color: #121212;
  color: #f1f1f1;
}

/* شريط التنقل في الوضع الليلي */
.dark .navbar {
  background-color: #1e1e1e;
}

/* روابط التنقل في الوضع الليلي */
.dark .nav-link {
  color: #ddd;
}

/* عند تمرير الماوس على الروابط */
.dark .nav-link:hover {
  color: #00d1b2;
}
</style>
