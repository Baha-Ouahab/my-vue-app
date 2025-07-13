<template>
  <section class="about-page">
    <div class="content">
      <h1>About Us</h1>
      <p class="intro">
        We are a passionate team of developers specializing in modern, high-performance web applications using Vue.js.
      </p>

      <div class="highlights">
        <div class="card">
          <h3>🚀 Innovation</h3>
          <p>We bring modern ideas to life with cutting-edge technology.</p>
        </div>
        <div class="card">
          <h3>💼 Professionalism</h3>
          <p>We value clean code, scalable architecture, and user-first design.</p>
        </div>
        <div class="card">
          <h3>🤝 Collaboration</h3>
          <p>We believe in working closely with our clients and teams to deliver results.</p>
        </div>
      </div>

      <!-- Cities Section -->
      <div class="cities">
        <h2>Our locations in Algeria</h2>
        <ul>
          <li v-for="city in cities" :key="city">{{ city }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      cities: ['Alger', 'Oran', 'Batna', 'Setif', 'constantine']
    };
  }
};
</script>

<style scoped>
.about-page {
  padding: 60px 20px;
  background-color: #f9f9f9;
  color: #2c3e50;
  font-family: 'Segoe UI', sans-serif;
}

.content {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.intro {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #555;
}

.highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
  padding: 20px;
  width: 260px;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  margin-bottom: 10px;
  color: #00d1b2;
}

/* Cities Section */
.cities {
  margin-top: 50px;
}

.cities h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #00d1b2;
}

.cities ul {
  list-style: none;
  padding: 0;
}

.cities li {
  font-size: 18px;
  margin: 6px 0;
  color: #333;
}

/* Dark mode override */
:deep(.dark) .about-page {
  background-color: #121212;
  color: #f1f1f1;
}

:deep(.dark) .card {
  background-color: #1f1f1f;
  color: #f1f1f1;
}

:deep(.dark) .cities li {
  color: #66ffe0;
}
</style>
