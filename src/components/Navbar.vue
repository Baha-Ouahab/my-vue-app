<template>
  <nav class="navbar">
    <div class="logo-container">
      <img :src="logo" alt="Logo" class="logo premium-logo" />
    </div>

    <ul>
      <li><router-link to="/" class="nav-link">Home</router-link></li>
      <li><router-link to="/about" class="nav-link">About</router-link></li>
      <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
    </ul>

    <!-- زر الوضع الليلي/النهاري -->
    <button @click="toggleTheme" class="theme-toggle">
      {{ isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode' }}
    </button>
  </nav>
</template>

<script>
import logo from '../assets/bird_2.jpg';

export default {
  name: 'Navbar',
  data() {
    return {
      logo,
      isDarkMode: false
    }
  },
  mounted() {
    // تفعيل الوضع الداكن تلقائياً حسب إعدادات الجهاز
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle('dark');
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 16px 32px;
}

.logo-container {
  flex-shrink: 0;
}

.logo {
  height: 100px;
  width: auto;
  display: block;
  object-fit: contain;
  cursor: pointer;
}

.premium-logo {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  animation: pulse 3s infinite;
}

.premium-logo:hover {
  transform: scale(1.1) rotate(2deg);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.04); }
  100% { transform: scale(1); }
}

ul {
  display: flex;
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  font-weight: 300;
  font-size: 22px;
  color: #333;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
  text-decoration: none;
}

.nav-link:hover {
  color: #00d1b2;
  transform: translateY(-4px) scale(1.05);
}

/* زر الوضع الليلي/النهاري */
.theme-toggle {
  font-size: 14px;
  padding: 8px 16px;
  margin-left: 16px;
  background: none;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background-color: #00d1b2;
  color: white;
}
</style>
