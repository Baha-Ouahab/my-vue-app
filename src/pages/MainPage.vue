<template>
  <div>
    <h2>User Form</h2>

    <!-- Use the form component here -->
    <FormComponent @save="handleSave" />

    <div v-if="user.name">
      <h3>✅ Saved Information:</h3>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Age:</strong> {{ user.age }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import FormComponent from '../components/FormComponent.vue';


export default {
  name: 'MainPage',
  components: {
    FormComponent
  },
  data() {
    return {
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

<style scoped>
h2 {
  margin-bottom: 16px;
}
</style>
