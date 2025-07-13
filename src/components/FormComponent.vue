<!-- src/components/FormComponent.vue -->
<template>
  <div>
    <input v-model="form.name" type="text" placeholder="Name" />
    <input v-model="form.age" type="number" placeholder="Age" />
    <input v-model="form.email" type="email" placeholder="Email" />
    <button @click="submitForm">💾 Save</button>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  data() {
    return {
      form: {
        name: '',
        age: '',
        email: ''
      }
    };
  },
  methods: {
    submitForm() {
      this.$emit('save', { ...this.form });

      // Clear inputs
      this.form.name = '';
      this.form.age = '';
      this.form.email = '';
    }
  }
};
</script>

<style scoped>
input {
  display: block;
  margin: 10px 0;
  padding: 6px;
  width: 200px;
}
button {
  padding: 6px 12px;
}
</style>
