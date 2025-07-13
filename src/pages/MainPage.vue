<template>
  <div>
    <!-- الشريط العلوي -->
    <Navbar />

    <!-- باقي الصفحة -->
    <TitleComponent :title="pageTitle" />
    <FormComponent @save="handleSave" />

    <div v-if="user.name">
      <h3>المعلومات المحفوظة:</h3>
      <p><strong>الاسم:</strong> {{ user.name }}</p>
      <p><strong>العمر:</strong> {{ user.age }}</p>
      <p><strong>الإيميل:</strong> {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import TitleComponent from '../components/TitleComponent.vue'
import FormComponent from '../components/FormComponent.vue'

export default {
  name: 'MainPage',
  components: {
    Navbar,
    TitleComponent,
    FormComponent
  },
  data() {
    return {
      pageTitle:'log in ',
      user: {
        name: '',
        age: '',
        email: ''
      }
    };
  },
  methods: {
    handleSave(data) {
      this.user = data;
    }
  }
};
</script>
