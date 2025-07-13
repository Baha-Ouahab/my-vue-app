<!-- src/pages/HomePage.vue -->
<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="title">Welcome to Ouahab Website</h1>
        <p class="subtitle">
          Build fast, modern, and responsive web applications with Vue.
        </p>
        <button @click="goToContact">Get in Touch</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToContact() {
      this.$router.push('/contact');
    }
  }
};
</script>

<style scoped>
.home {
  font-family: 'Inter', 'Segoe UI', sans-serif;
}

.hero {
  background: linear-gradient(to right, #1f1c2c, #928dab);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 20px;
}

.hero-content {
  max-width: 800px;
}

.title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.25rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

button {
  background-color: #00d1b2;
  color: white;
  padding: 14px 28px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #00b89c;
}
</style>
