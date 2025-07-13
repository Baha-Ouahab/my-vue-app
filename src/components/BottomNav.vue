<template>
  <nav class="bottom-nav">
    <ul>
      <li
        v-for="(item, index) in navItems"
        :key="item.name"
        :class="{ active: activeIndex === index }"
        @click="setActive(index)"
      >
        <a href="#" @click.prevent="navigate(item.route)">
          <span class="icon">{{ item.icon }}</span>
          <span class="label">{{ item.name }}</span>
        </a>
      </li>
      <div
        class="underline"
        :style="{
          transform: `translateX(${activeIndex * 100}%)`
        }"
      ></div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav',
  data() {
    return {
      activeIndex: 0,
      navItems: [
        { name: 'Home', route: '/', icon: '🏠' },
        { name: 'About', route: '/about', icon: 'ℹ️' },
        { name: 'Contact', route: '/contact', icon: '✉️' }
      ]
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
    navigate(route) {
      this.$router.push(route);
    }
  },
  mounted() {
    const currentPath = this.$route.path;
    const foundIndex = this.navItems.findIndex(item => item.route === currentPath);
    if (foundIndex !== -1) this.activeIndex = foundIndex;
  },
  watch: {
    '$route.path'(newPath) {
      const foundIndex = this.navItems.findIndex(item => item.route === newPath);
      if (foundIndex !== -1) this.activeIndex = foundIndex;
    }
  }
}
</script>

<style scoped>
/* Your CSS styles here */
</style>
