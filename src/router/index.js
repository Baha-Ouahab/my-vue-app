// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage.vue'; // ✅ Match the file name exactly


const routes = [
  { path: '/', component: MainPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
